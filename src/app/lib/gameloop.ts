type GameLoopArguments = {
    update: (t: number, dt: number) => void,
    render: (alpha: number) => void
}

export class GameLoop {
    #ups = 50
    #fps = 60
    #t = 0
    #dt = 1 / this.#ups
    #maxFrameTime = 1 / this.#fps
    #accumulator = 0
    #lastTime = 0
    #updateFunction = (t: number, dt: number) =>  {}
    #renderFunction = (alpha: number) => {}

    constructor({ update, render}: GameLoopArguments) {
        this.#updateFunction = update
        this.#renderFunction = render
    }

    public start(){
        this.#lastTime = performance.now()
        requestAnimationFrame(this.tick.bind(this))
    }

    private tick(now: number) : void {
        let frameTime = (now - this.#lastTime) / 1e9

        if(frameTime > this.#maxFrameTime) {
            frameTime = this.#maxFrameTime
        }

        this.#lastTime = now
        this.#accumulator += frameTime

        while(this. #accumulator >= this.#dt) {
            this.#updateFunction(this.#t, this.#dt)
            this.#t += this.#dt
            this.#accumulator -= this.#dt
        }
        const alpha = this.#accumulator / this.#dt
        this.#renderFunction(alpha)
    }

    public setFps(fps: number) {
        this.#fps = fps;
        this.#maxFrameTime = 1 / fps
    }

    public setUps(ups: number) {
        this.#ups = ups;
        this.#dt = 1 / ups
    }
}
