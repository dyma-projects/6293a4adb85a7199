import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  private colors: object = {
    ArrowUp: 'orange',
    ArrowDown: 'green',
    ArrowLeft: 'blue',
    ArrowRight: 'red'
  }

  @HostBinding('style.color') private color: string
  @HostListener('window:keyup', ['$event']) windowKeyUp($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        this.color = this.colors[$event.key]
        break
      case 'ArrowDown':
        this.color = this.colors[$event.key]
        break
      case 'ArrowLeft':
        this.color = this.colors[$event.key]
        break
      case 'ArrowRight':
        this.color = this.colors[$event.key]
        break
      default:
        this.color = 'black'
        break
    }

    console.log('COLOR -', this.color)
  }


  constructor() {
    this.color = 'black'
  }

}
