import {animate, query, style, transition, trigger} from "@angular/animations";

export const FadeInOutAnimation =
  trigger('routeAnimation', [
    transition('* => *', [
      style({
        position: 'relative'
      }),

      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ], { optional: true }),

      query(':enter', [
        style({
          opacity: 0
        })
      ], { optional: true }),

      query(':leave', [
        animate(300, style({
          opacity: 0
        }))
      ], { optional: true }),

      query(':enter', [
        animate(300, style({
          opacity: 1
        }))
      ], { optional: true })
    ])
  ])
