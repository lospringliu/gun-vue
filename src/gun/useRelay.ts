/**
 * Relay connection management
 * @module Relay
 * @group Database
 */

import { useGun } from './composables'
import { computed, reactive, watch } from 'vue'
import type { Ref } from 'vue'
import { useStorage } from "@vueuse/core";
import ms from 'ms'

import config from '../../gun.config.json'

const defaultPeer = config.relay


/**
 * Peer server status reactive object
 * @example
 * {
 * "peer": "https://peer.era.eco/gun",
 * "host": "6db1edbb5aae",
 * "status": "running",
 * "started": 1642666725795,
 * "pulse": 1642677007483,
 * "lag": 8,
 * "diff": 10281688,
 * "age": "3h",
 * "delay": 22,
 * "blink": true
 * }
 */

export interface Relay {
  peer: string
  host: string
  status: string
  pulse: number
  lag: number
  started: number
  diff: number
  age: string
  blink: boolean
}

export const relay: Relay = reactive({
  list: [],
  peer: useStorage("peer", defaultPeer),
  host: computed(() => new URL(relay.peer).hostname),
  status: 'offline',
  started: 0,
  pulse: 0,
  lag: 0,
  diff: computed(() => relay.pulse - relay.started),
  age: computed(() => ms(relay.diff)),
  delay: computed(() => Date.now() - relay.pulse),
  blink: false,
})

watch(
  () => relay.pulse,
  (next, prev) => {
    relay.blink = !relay.blink
    relay.lag = next - prev - 500
  },
)

export function setPeer(url: string) {
  relay.peer = url
  setTimeout(() => {
    window.location.reload()
      , 700
  })

}

export function resetPeer() {
  relay.peer = defaultPeer
  setTimeout(() => {
    window.location.reload()
      , 700
  })
}


/**
 * Peer server status monitor
 * @returns {useRelay}
 *
 * @example
 * import { useRelay } from '@gun-vue/composables';
 *
 * const { relay, setPeer, resetPeer } = useRelay()
 */
export function useRelay(): { relay: Relay, setPeer: (url: string) => void, resetPeer: () => void } {
  const gun = useGun()
  if (relay.pulse == 0) {
    gun
      .get(relay.host)
      .map()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      .on((d: string, k: string) => {
        relay[k] = d
      })
  }

  return { relay, setPeer, resetPeer }
}
