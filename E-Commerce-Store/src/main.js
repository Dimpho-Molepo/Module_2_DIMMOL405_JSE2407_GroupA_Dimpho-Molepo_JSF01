import './style.css'
import Alpine from 'alpinejs'
import { productDisplay } from './productDisplay.js'

window.Alpine = Alpine

Alpine.data('productDisplay', productDisplay)

Alpine.start()