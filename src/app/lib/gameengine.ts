import * as THREE from "three"
import { GameLoop } from "./gameloop"

export class GameEngine {
    private scene: THREE.Scene = new THREE.Scene()
    private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
    private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()

    private loop = new GameLoop({
        update: this.update.bind(this),
        render: this.render.bind(this)
    })

    constructor() {
        
    }

    public start(): void {
        this.loop.start()
    }

    private update(t: number, dt: number) {

    }

    private render(alpha: number) {
        
    }
}