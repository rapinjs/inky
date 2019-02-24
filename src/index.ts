import { Inky } from './plugin'
export default class InkyPlugin {
  public afterInitRegistry({ registry }) {
    registry.set('inky', new Inky())
  }
}
