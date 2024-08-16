[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Game

# Class: `abstract` Game

## Constructors

### new Game()

```ts
new Game(): Game
```

#### Returns

[`Game`](Game.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `cachedPlayer` | `static` | [`Player`](Player.md) | [src/client/Game.ts:537](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L537) |
| `hashCache` | `static` | `Map`\<`string`, `number`\> | [src/client/Game.ts:8](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L8) |

## Accessors

### ExtendWorldBoundry

```ts
set ExtendWorldBoundry(vec): void
```

Sets the max boundry the local player can go to before they get killed

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec` | [`Vector3`](Vector3.md) | the max bounds for the local player |

#### Defined in

[src/client/Game.ts:487](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L487)

***

### LastVehicle

```ts
get LastVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/client/Game.ts:491](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L491)

***

### CurrentInputMode

```ts
get static CurrentInputMode(): InputMode
```

Get current input mode.

#### Returns

[`InputMode`](../enumerations/InputMode.md)

InputMode: Mouse & Keyboard or GamePad.

#### Defined in

[src/client/Game.ts:251](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L251)

***

### FPS

```ts
get static FPS(): number
```

Gets the current frame rate per second

#### Returns

`number`

#### Defined in

[src/client/Game.ts:77](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L77)

***

### FrameCount

```ts
get static FrameCount(): number
```

Gets the total amount of frames rendered in this session

#### Returns

`number`

#### Defined in

[src/client/Game.ts:70](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L70)

***

### GameTime

```ts
get static GameTime(): number
```

Gets how many milliseconds the game has been open this session

#### Returns

`number`

#### Defined in

[src/client/Game.ts:54](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L54)

***

### IsCutsceneActive

```ts
get static IsCutsceneActive(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:215](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L215)

***

### IsLoading

```ts
get static IsLoading(): boolean
```

Get if a loading screen is active.

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:243](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L243)

***

### IsMissionActive

```ts
get static IsMissionActive(): boolean
```

```ts
set static IsMissionActive(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:199](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L199)

***

### IsPaused

```ts
get static IsPaused(): boolean
```

Is the player in the pause menu (ESC).

```ts
set static IsPaused(toggle): void
```

Force enable pause menu.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:229](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L229)

***

### IsRandomEventActive

```ts
get static IsRandomEventActive(): boolean
```

```ts
set static IsRandomEventActive(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:207](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L207)

***

### IsWaypointActive

```ts
get static IsWaypointActive(): boolean
```

Is a waypoint set on the map.

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:222](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L222)

***

### Language

```ts
get static Language(): Language
```

Gets the game language

#### Returns

[`Language`](../enumerations/Language.md)

#### Defined in

[src/client/Game.ts:47](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L47)

***

### LastFrameTime

```ts
get static LastFrameTime(): number
```

Gets the time it currently takes to render a frame, in seconds;

#### Returns

`number`

#### Defined in

[src/client/Game.ts:84](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L84)

***

### MaxWantedLevel

```ts
get static MaxWantedLevel(): number
```

Get the maximum wanted level.

```ts
set static MaxWantedLevel(value): void
```

Set the maximum wanted level the local client can get.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/Game.ts:140](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L140)

***

### Nightvision

```ts
get static Nightvision(): boolean
```

Get if nightvision is active.

```ts
set static Nightvision(toggle): void
```

Toggle nightvision.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:174](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L174)

***

### Player

```ts
get static Player(): Player
```

Get the local player's Player object.

#### Returns

[`Player`](Player.md)

#### Defined in

[src/client/Game.ts:91](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L91)

***

### PlayerPed

```ts
get static PlayerPed(): Ped
```

Get the local player character's Ped object.

#### Returns

[`Ped`](Ped.md)

A local player's character.

#### Defined in

[src/client/Game.ts:104](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L104)

***

### PlayerVersusPlayer

```ts
get static PlayerVersusPlayer(): boolean
```

Get whether PvP is enabled.

```ts
set static PlayerVersusPlayer(value): void
```

Set whether PvP is enabled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

True if enabled.

#### Defined in

[src/client/Game.ts:126](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L126)

***

### RadioStation

```ts
get static RadioStation(): RadioStation
```

Gets the player's current radio station.

```ts
set static RadioStation(station): void
```

Sets the player's radio station.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `station` | [`RadioStation`](../enumerations/RadioStation.md) | A radio station. |

#### Returns

[`RadioStation`](../enumerations/RadioStation.md)

A radio station.

#### Defined in

[src/client/Game.ts:260](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L260)

***

### ShowPoliceBlipsOnRadar

```ts
set static ShowPoliceBlipsOnRadar(toggle): void
```

Set whether police blips should show on minimap.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/client/Game.ts:167](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L167)

***

### ThermalVision

```ts
get static ThermalVision(): boolean
```

Get if thermal (heat) vision is active.

```ts
set static ThermalVision(toggle): void
```

Toggle thermal (heat) vision.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/Game.ts:188](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L188)

***

### TimeScale

```ts
set static TimeScale(time): void
```

Sets the time scale of the Game.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `time` | `number` | The time scale, only accepts values between 0.0 and 1.0 |

#### Defined in

[src/client/Game.ts:63](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L63)

***

### WantedMultiplier

```ts
set static WantedMultiplier(value): void
```

Set the multiplier of the wanted level.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/Game.ts:160](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L160)

***

### WaypointPosition

```ts
get static WaypointPosition(): Vector3
```

```ts
set static WaypointPosition(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/Game.ts:515](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L515)

## Methods

### disableAllControlsThisFrame()

```ts
static disableAllControlsThisFrame(inputMode): void
```

Disables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:398](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L398)

***

### disableControlThisFrame()

```ts
static disableControlThisFrame(inputMode, control): void
```

Makes the Game Engine ignore the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:389](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L389)

***

### doesGXTEntryExist()

```ts
static doesGXTEntryExist(entry): boolean
```

Determines the game language files contain a entry for the specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`boolean`

true if GXT entry exists; otherwise, false

#### Defined in

[src/client/Game.ts:464](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L464)

***

### enableAllControlsThisFrame()

```ts
static enableAllControlsThisFrame(inputMode): void
```

Enables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:407](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L407)

***

### enableControlThisFrame()

```ts
static enableControlThisFrame(inputMode, control): void
```

Makes the Game Engine respond to the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:379](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L379)

***

### entityFromHandle()

```ts
static entityFromHandle(handle): null | Ped | Vehicle | Prop
```

Get an entity object from an entity handle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | Handle of entity |

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.

#### Defined in

[src/client/Game.ts:417](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L417)

***

### generateHash()

```ts
static generateHash(input): number
```

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`

#### Defined in

[src/client/Game.ts:14](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L14)

***

### getGXTEntry()

```ts
static getGXTEntry(entry): string
```

Returns a localised string from the games language files with a specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`string`

The localised string if the key exists; otherwise, empty string

#### Defined in

[src/client/Game.ts:478](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L478)

***

### getGroundHeight()

```ts
static getGroundHeight(position): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/client/Game.ts:532](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L532)

***

### getWaypointBlip()

```ts
static getWaypointBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Defined in

[src/client/Game.ts:497](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L497)

***

### isControlEnabled()

```ts
static isControlEnabled(inputMode, control): boolean
```

Check whether a control is enabled this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:369](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L369)

***

### isControlJustPressed()

```ts
static isControlJustPressed(inputMode, control): boolean
```

Check whether a control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:303](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L303)

***

### isControlJustReleased()

```ts
static isControlJustReleased(inputMode, control): boolean
```

Check whether a control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:347](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L347)

***

### isControlPressed()

```ts
static isControlPressed(inputMode, control): boolean
```

Check whether a control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:281](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L281)

***

### isControlReleased()

```ts
static isControlReleased(inputMode, control): boolean
```

Check whether a control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:325](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L325)

***

### isDisabledControlJustPressed()

```ts
static isDisabledControlJustPressed(inputMode, control): boolean
```

Check whether a disabled control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:314](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L314)

***

### isDisabledControlJustReleased()

```ts
static isDisabledControlJustReleased(inputMode, control): boolean
```

Check whether a disabled control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:358](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L358)

***

### isDisabledControlPressed()

```ts
static isDisabledControlPressed(inputMode, control): boolean
```

Check whether a disabled control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:292](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L292)

***

### isDisabledControlReleased()

```ts
static isDisabledControlReleased(inputMode, control): boolean
```

Check whether a disabled control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/client/Game.ts:336](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L336)

***

### playMusic()

```ts
static playMusic(musicFile): void
```

Play music. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile` | `string` | Music file. |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:444](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L444)

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

Play a sound. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `soundFile` | `string` | Name of sound |
| `soundSet` | `string` | The set where the sound is in |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:435](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L435)

***

### playerList()

```ts
static playerList(excludeLocalPlayer): IterableIterator<Player>
```

Get an iterable list of players currently on server.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `excludeLocalPlayer` | `boolean` | `false` |

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Player objects.

#### Defined in

[src/client/Game.ts:112](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L112)

***

### removeWaypoint()

```ts
static removeWaypoint(): void
```

#### Returns

`void`

#### Defined in

[src/client/Game.ts:511](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L511)

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

#### Returns

`void`

#### Defined in

[src/client/Game.ts:35](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L35)

***

### setGhostAlpha()

```ts
static setGhostAlpha(alpha): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:31](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L31)

***

### setGhostingInverted()

```ts
static setGhostingInverted(isInverted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isInverted` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:39](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L39)

***

### setLocalPlayerGhosted()

```ts
static setLocalPlayerGhosted(isGhosted, inverseGhost): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |
| `inverseGhost` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:26](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L26)

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile`? | `string` | (optional) Music file. |

#### Returns

`void`

#### Defined in

[src/client/Game.ts:453](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/Game.ts#L453)
