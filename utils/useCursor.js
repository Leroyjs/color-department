import {useEffect, useRef} from "react";
import {css} from '@emotion/css'
import {propTypesChildren} from "../components/types";
import {PropTypes} from "prop-types";
import {createPortal} from "react-dom";

class Cursor {
    constructor(cursorEl, mountEl) {
        this.rootEl = mountEl || window;
        this.bindAll()

        this.cursorEl = cursorEl;
        this.links = [...document.querySelectorAll('[data-cursor-sticky]')]
        this.outer = this.cursorEl.getBoundingClientRect()

        if (!this.cursorEl) return

        this.client = {
            x: 0,
            y: 0
        }

        this.data = {
            ease: 0.2,
            fx: {
                diff: 0,
                acc: 0,
                velo: 0,
                scale: 0
            }
        }

        this.mousePos = {
            x: this.client.x,
            y: this.client.y
        }

        this.state = {
            stuck: false
        }

        this.rAF = undefined

        this.init()
    }

    bindAll() {
        ['run', 'mouseEnter', 'mouseLeave']
            .forEach((fn) => this[fn] = this[fn].bind(this))
    }

    lerp(a, b, n) {
        return (1 - n) * a + n * b
    }

    getMousePos(e) {
        this.client.x = e.clientX - this.outer.width / 2
        this.client.y = e.clientY - this.outer.height / 2
    }

    mouseEnter(e) {
        this.state.stuck = true

        this.button = e.target
        this.item = this.button.getBoundingClientRect()

        this.y = this.item.width / 2
        this.x = this.item.height / 2

        this.cursorEl.style.transform = `translate3d(${Math.floor(this.item.left)}px, ${Math.floor(this.item.top)}px, 0)`

        this.cursorEl.style.width = `${this.item.width}px`
        this.cursorEl.style.height = `${this.item.width}px`
    }

    mouseLeave() {
        this.state.stuck = false

        this.cursorEl.style.width = `${this.outer.width}px`
        this.cursorEl.style.height = `${this.outer.height}px`
    }

    run() {
        this.mousePos.y = this.lerp(this.mousePos.y, this.client.y, this.data.ease)
        this.mousePos.x = this.lerp(this.mousePos.x, this.client.x, this.data.ease)

        this.data.fx.diff = this.client.x - this.mousePos.x
        this.data.fx.acc = this.data.fx.diff / window.innerWidth
        this.data.fx.velo = +this.data.fx.acc
        this.data.fx.scale = 1 - Math.abs(this.data.fx.velo * 2)

        if (!this.state.stuck) {
            this.cursorEl.style.transform = `translate3d(${this.mousePos.x}px, ${this.mousePos.y}px, 0) scale(${this.data.fx.scale})`
        }

        this.requestAnimationFrame()
    }

    on(requestAnimationFrame = true) {
        this.addEvents()

        requestAnimationFrame && this.requestAnimationFrame()
    }

    requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run)
    }

    addEvents() {
        this.rootEl.addEventListener('mousemove', (e) => this.getMousePos(e), {passive: true})

        this.links.forEach(cursorEl => {
            cursorEl.addEventListener('mouseenter', (e) => this.mouseEnter(e))
            cursorEl.addEventListener('mouseleave', this.mouseLeave)
        })

    }

    init() {
        this.on()
    }

}

const cursorStyle = css`
  position: fixed;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  top: 0;
  left: 0;
  border: 5px solid lightseagreen;
  z-index: 100;
  pointer-events: none;
`

export function useCursor({mountRef = null, className, children = null} = {}) {
    const cursorRef = useRef(null);

    useEffect(() => {
        const mountEl = mountRef?.current || document.body;
        const cursorEl = document.createElement('span');
        cursorEl.classList.add(className ? className : cursorStyle);
        mountEl.appendChild(cursorEl);

        cursorRef.current = new Cursor(cursorEl, mountEl)
        createPortal(children, cursorEl)
        return () => document.body.removeChild(cursorEl);
    }, [])

    return cursorRef.current;
}
