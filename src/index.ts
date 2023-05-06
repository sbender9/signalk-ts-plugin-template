/*
 * Copyright 2021 Scott Bender <scott@scottbender.net>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function (app: any) {
  const error = app.error
  const debug = app.debug
  let props: any
  let onStop:any = []
  
  const plugin: Plugin = {
    start: function (properties: any) {
      props = properties
    },

    stop: function () {
      onStop.forEach((f:any) => f())
      onStop = []
    },

    id: 'signalk-n2k-switching-emulator',
    name: 'NMEA 2000 Siwtching Emulator',
    description: 'Signal K Plugin which makes exist switches in sk available as n2k switches',

    schema: () => {
      const schema: any = {
        type: 'object',
        properties: {}
      }
      return schema
    }
  }
  return plugin
}

interface Plugin {
  start: (app: any) => void
  stop: () => void
  id: string
  name: string
  description: string
  schema: any
}

