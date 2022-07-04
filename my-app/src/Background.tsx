import React from 'react';
import Particles from 'react-tsparticles';
import { loadFountainPreset } from 'tsparticles-preset-fountain';
import type { Engine } from 'tsparticles-engine';

/*
    Background Component  
*/

export class ParticlesContainer extends React.PureComponent {
    async customInit(engine: Engine): Promise<void> {
        await loadFountainPreset(engine);
    }

    render() {
        const options = {
            preset: "fountain",
        }
        return <Particles options={options} init ={this.customInit} />;
    }
}