import Layout from "../components/layout";
import Link from 'next/link';
import { client } from '../libs/client';
import Image from 'next/image';
import { Fireworks } from '@fireworks-js/react'

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "portfolio" });

  return {
    props: {
      portfolio: data.contents,
    }
  }
};


export default function Home({ portfolio }) {
  console.log(portfolio);
  return (
    <Layout>
      <div className="w-screen h-screen  text-white relative z-20 bg-black bg-opacity-30">
        <h2 className="text-center absolute top-1/2 left-1/2  w-full -translate-y-2/4 -translate-x-2/4 z-20">
          <span className="font-serif tracking-widest font-bold text-5xl md:text-7xl mb-6 inline-block">Yuta <br className="block md:hidden" /> Sugimine</span><br />
          <span className="font-mono text-lg md:text-lg inlin-block md:tracking-widest font-bold">It is a self-introduction site <br className="block md:hidden" /> of a university student enginner.</span>
        </h2>
        <Fireworks
          options={{
            hue: {
              min: 0,
              max: 209
            },
            acceleration: 1.00,
            brightness: {
              min: 4,
              max: 95
            },
            decay: {
              min: 0.013,
              max: 0.033
            },
            delay: {
              min: 24.52,
              max: 55.00
            },
            explosion: 4,
            flickering: 50.00,
            intensity: 8.00,
            friction: 0.96,
            gravity: 1.52,
            opacity: 0.1,
            particles: 103,
            traceLength: 5.70,
            traceSpeed: 13,
            rocketsPoint: {
              min: 0,
              max: 100
            },
            lineWidth: {
              explosion: {
                min: 0.83,
                max: 5.65
              },
              trace: {
                min: 0.10,
                max: 4.84
              }
            },
            lineStyle: "round",
            mouse: {
              click: true,
              move: false,
              max: 3
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 15
          }}
        />
      </div>
      <Image src="/mv.jpg" width={1280} height={500} quality={100} className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 block min-w-min min-h-screen w-screen h-screen z-10" alt="mv" />
    </Layout>
  )
}
