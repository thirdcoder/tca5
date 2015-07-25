NOP

; write to memory-mapped video
LDA #%i1i1i
.equ $wdddd video_start
.equ $ddddd video_end
STA video_start
STA $wdddd
STA $0zzzz
STA $0zzzy
STA $0zzzx
STA $0zzzw
STA $0zzz0
STA $0zzza

.equ -3282 chargen
.equ -3283 row
.equ -3284 col

.equ -3286 beep

; write to text character generator
LDA #'X
LDX #0
STX row
LDY #4
STY col
LDX #1
STA chargen

ADC #2
STI A        ; simple ternary inverter
STA chargen  ; trit-text red 'Z'

LDX #4
INX
STX col
DEC chargen  ; trit-text 'Y'

TXA     ; X->A, 5

; setup stack, since default 0 overlaps with memory-mapped screen output
.equ -10000 stack
LDY #>stack
LDX #<stack
TXYS

; loop 6..19
loop:
INC A
STA col
STA chargen
CMP #20
;BNE #-11
BNE loop

LDA #1
STA row
STZ col

; print greeting
LDA #<greeting
LDX #>greeting
JSR print_string

INC row
STZ col

LDA #<prompt_string
LDX #>prompt_string
JSR print_string

;STZ beep

; set input interrupt handler
.equ -29524 int_inputL
.equ -29523 int_inputH
LDA #<handle_input
STA int_inputL
LDA #>handle_input
STA int_inputH

SEIP     ; enable interrupt -1 (keyboard input) TODO: also handle int 1, then can unmask all with CLI

; set pulse interrupt handler
.equ -29520 int_pulseL
.equ -29519 int_pulseH
LDA #<handle_pulse
STA int_pulseL
LDA #>handle_pulse
STA int_pulseH

CLI      ;  enable all interrupts

LDA #'_               ; a suitable cursor character
;LDA #'▒            ; alternative block cursor TODO: use in 'insert' mode?
STA cursor_char

.equ -3285 timer_freq
LDA #1     ; 100 ms
; cursor blink - disable when want quiescence (noisy)
STA timer_freq   ; triggers interrupt immediately.. TODO: probably should delay! or never returns?
;

HALTZ

cursor_char:
.tryte 0

greeting:
.data "Hello, world! ☺ 3502 CPU online: system ready---------------------------------------------"
.tryte 0

prompt_string:
;TODO: support newlines in print_string '.tryte 12',  // trit-text newline TODO: support embedding in .data
.data "$ "
.tryte 0

bad_command_string:
.data "Bad command or file name: "
.tryte 0

handle_pulse:
; blinking cursor
LDA cursor_char
STA chargen
STI cursor_char    ; simple ternary inverter, toggle red/green '_'
RTI                ; return from interrupt

; subroutine to advance terminal to next line
next_line:
INC row
STZ col
RTS


handle_prev_line:
DEC row
LDA #44        ; TODO: .equ
STA col
JMP handled_input

handle_backspace:
JSR truncate_line_buffer
BCS handle_backspace_denied    ; if couldn't delete
STZ chargen                    ; clear cursor
DEC col
LDA col
CMP #-1
BEQ handle_prev_line
STZ chargen
JMP handled_input

handle_backspace_denied:
STZ beep                       ;  user feedback that their backspacing was denied
JMP handled_input

handle_enter:
STZ chargen                    ; clear cursor
JSR next_line
; check commands TODO: strcmp, check full string instead of only first character
LDY #0
LDA #'b
CMP line_buffer,Y
BEQ command_beep
LDA #'c
CMP line_buffer,Y
BEQ command_clear
JMP command_bad

command_bad:
LDA #<bad_command_string
LDX #>bad_command_string
JSR print_string
LDA #<line_buffer
LDX #>line_buffer
JSR print_string
JMP handle_enter_done

handle_enter_done:
JSR reset_line_buffer
INC row
STZ col
LDA #<prompt_string
LDX #>prompt_string
JSR print_string
JMP handled_input

; interrupt handler:
handle_input:
CMP #'\n
BEQ handle_enter
CMP #0
BEQ handle_backspace

JSR save_line_buffer_char
JSR print_char


handled_input:
RTI

command_beep:
STA beep
JMP handle_enter_done

.equ 45 col_count
.equ 28 row_count

command_clear:
STZ col
STZ row
_command_clear_next_row:
_command_clear_next_col:
STZ chargen     ; write empty character at each cursor position to clear terminal TODO: instead write to tritmapped memory?
INC col
LDA col
CMP #col_count
BNE _command_clear_next_col
INC row
LDA row
CMP #row_count
BNE _command_clear_next_row
STZ beep        ; beep when done
STZ col         ; reset cursor to beginning
STZ row
JMP handle_enter_done


; append character in A to line_buffer
save_line_buffer_char:
LDY line_buffer_offset
STA line_buffer,Y
INC line_buffer_offset
INY
LDX #0
STX line_buffer,Y      ; null terminate
RTS

line_buffer_offset:
.tryte 0

; reset line buffer to empty string
reset_line_buffer:
STZ line_buffer_offset
STA line_buffer
RTS

; delete last character of line buffer, sets carry flag if cannot be deleted
truncate_line_buffer:
LDY line_buffer_offset
DEY
CPY #0
BMI _truncate_line_buffer_skip     ; empty buffer, cannot truncate further
STZ line_buffer,Y
STY line_buffer_offset
CLC
RTS
_truncate_line_buffer_skip:
SECN
RTS

; print character in A to screen and advance cursor
print_char:
STA chargen
INC col

LDX col
CPX #col_count
BNE print_char_done
JSR next_line          ; at last column, wrap cursor to next line

print_char_done:
RTS


; print a null-terminated string pointed to by A,X
print_string:
STA _print_string_param
STX _print_string_param+1
LDY #0
_print_string_loop:
LDA (_print_string_param),Y
CMP #0
BEQ _print_string_done
JSR print_char
INY
BRA _print_string_loop
_print_string_done:
RTS
_print_string_param:
.word 0


line_buffer:
.tryte 0     ; may extend further
