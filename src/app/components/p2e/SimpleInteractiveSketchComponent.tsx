// SimpleInteractiveSketchComponent.tsx
import React, { useEffect } from 'react';
import p5 from 'p5';

class Particle {
    p: any;
    position: any;
    velocity: any;
    acceleration: any;
    alpha: number;

    constructor(p: any) {
        this.p = p;
        this.position = p.createVector(p.random(p.width), p.random(p.height));
        this.velocity = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1));  // Slower velocity
        this.acceleration = p.createVector(0, 0);
        this.alpha = 0;
    }

    repel(x: number, y: number) {
        const force = p5.Vector.sub(this.p.createVector(x, y), this.position);
        force.setMag(-0.15);  // repulsion
        this.acceleration.add(force);
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(-1);
        this.alpha += 1.5;
    }

    display() {
        this.p.stroke(135, 206, 250, this.alpha);
        this.p.strokeWeight(2);
        this.p.fill(135, 206, 250, this.alpha);
        this.p.ellipse(this.position.x, this.position.y, 12, 12);
    }

    isOutOfViewport() {
        return (
            this.position.x < 0 ||
            this.position.x > this.p.width ||
            this.position.y < 0 ||
            this.position.y > this.p.height
        );
    }
}

class Ripple {
    p: any;
    x: number;
    y: number;
    diameter: number;
    alpha: number;

    constructor(p: any, x: number, y: number) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.diameter = 0;
        this.alpha = 255;
    }

    display() {
        this.p.noFill();
        this.p.stroke(200, this.alpha);
        this.p.strokeWeight(2);
        this.p.ellipse(this.x, this.y, this.diameter);
    }

    expand() {
        this.diameter += 2;
        this.alpha -= 5;
    }
}

const SimpleInteractiveSketch = (props: { haloBackgroundRef: any }) => {
    const { haloBackgroundRef } = props;

    useEffect(() => {
        const p = new p5((p: any) => {
            let ripples: Ripple[] = [];
            let particles: Particle[] = [];

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                p.smooth();
                p.frameRate(30);
                for (let i = 0; i < 100; i++) {
                    particles.push(new Particle(p));
                }
            };

            p.draw = () => {
                p.clear();

                particles.forEach((particle, index) => {
                    particle.repel(p.mouseX, p.mouseY);
                    particle.run();
                    if (particle.isOutOfViewport()) {
                        particles[index] = new Particle(p);
                    }
                });

                ripples.forEach((ripple, index) => {
                    ripple.display();
                    ripple.expand();
                    if (ripple.alpha <= 0) {
                        ripples.splice(index, 1);
                    }
                });
            };

            p.mouseMoved = () => {
                ripples.push(new Ripple(p, p.mouseX, p.mouseY));
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
            };
        }, haloBackgroundRef.current);
        return () => { p.remove(); };
    }, [haloBackgroundRef]);

    return null;
};

export default SimpleInteractiveSketch;
