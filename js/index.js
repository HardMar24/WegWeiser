// map.js (Leaflet)
import './map'

// Carousel
import EmblaCarousel from 'embla-carousel'
import ClassNames from 'embla-carousel-class-names'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import './ColorMode'

// CSS
import '../css/index.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css'

const OPTIONS = {}

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')
const dotsNode = document.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [ClassNames()])

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
)

emblaApi
  .on('destroy', removePrevNextBtnsClickHandlers)
  .on('destroy', removeDotBtnsAndClickHandlers)
