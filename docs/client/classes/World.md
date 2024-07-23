[@nativewrappers/fivem](../../README.md) / [client](../README.md) / World

# Class: `abstract` World

Class with common world manipulations.

This class includes methods for creating entities and common world rendering.

You can create blips, entities, cameras and more.

## Abstract

## Constructors

### new World()

```ts
new World(): World
```

#### Returns

[`World`](World.md)

## Accessors

### Blackout

```ts
set static Blackout(value): void
```

Disables all emissive textures, street/building/vehicle lights. "EMP" effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | On or off. |

#### Defined in

[src/client/World.ts:101](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L101)

***

### CloudHat

```ts
get static CloudHat(): CloudHat
```

Get the current cloud hat.

```ts
set static CloudHat(value): void
```

Set the current cloud hat.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`CloudHat`](../enumerations/CloudHat.md) | The type of cloud hat. |

#### Returns

[`CloudHat`](../enumerations/CloudHat.md)

The current cloud hat type.

#### Defined in

[src/client/World.ts:110](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L110)

***

### CloudHatOpacity

```ts
get static CloudHatOpacity(): number
```

Get the opacity of current cloud hat. Value is between 0-1.

```ts
set static CloudHatOpacity(value): void
```

Set opacity of current cloud hat between 0-1.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Opacity between 0.0 and 1.0 |

#### Returns

`number`

The current cloud opacity between 0.0 and 1.0

#### Defined in

[src/client/World.ts:135](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L135)

***

### CurrentDate

```ts
get static CurrentDate(): Date
```

Get the current date in the world.

```ts
set static CurrentDate(date): void
```

Set the current date of the world.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `Date` |

#### Returns

`Date`

The current date.

#### Defined in

[src/client/World.ts:77](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L77)

***

### NextWeather

```ts
get static NextWeather(): Weather
```

Get the next weather type.

```ts
set static NextWeather(value): void
```

Set weather type instantly. Similar to World.transitionToWeather with duration 0.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) |

#### Returns

[`Weather`](../enumerations/Weather.md)

The Weather type

#### Defined in

[src/client/World.ts:210](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L210)

***

### RenderingCamera

```ts
get static RenderingCamera(): Camera
```

Get the current camera that's rendering.

```ts
set static RenderingCamera(value): void
```

Set the rendering camera. World.RenderingCamera = null to reset.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
World.RenderingCamera = myCamera;

// Reset to default cam
World.RenderingCamera = null;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `null` \| [`Camera`](Camera.md) | The camera to render. |

#### Returns

[`Camera`](Camera.md)

The camera that's currently used.

#### Defined in

[src/client/World.ts:37](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L37)

***

### RopesCreateNetworkWorldState

```ts
set static RopesCreateNetworkWorldState(value): void
```

Whether to create a network world state for Ropes
This currently does nothing

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/World.ts:68](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L68)

***

### Weather

```ts
get static Weather(): Weather
```

Get the current weather type.

```ts
set static Weather(value): void
```

Set the current weather.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) | Type of weather to set. |

#### Returns

[`Weather`](../enumerations/Weather.md)

The current type of weather.

#### Defined in

[src/client/World.ts:153](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L153)

***

### WeatherTransition

```ts
get static WeatherTransition(): [string | Weather, string | Weather, number]
```

Doesn't work

```ts
set static WeatherTransition(transition): void
```

Doesn't work

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transition` | [`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`] |

#### Returns

[`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`]

#### Defined in

[src/client/World.ts:260](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L260)

## Methods

### CreateAmbientPickup()

```ts
static CreateAmbientPickup(
   type, 
   position, 
   model, 
value): Promise<null | Prop>
```

Creates an ambient pickup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of the pickup. |
| `position` | [`Vector3`](Vector3.md) | The position where it should be spawned. |
| `model` | [`Model`](Model.md) | The model. |
| `value` | `number` | The value tied to the pickup. |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

The pickup in form of a Prop.

#### Defined in

[src/client/World.ts:619](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L619)

***

### CreatePickup()

```ts
static CreatePickup(
   type, 
   position, 
   model, 
   value, 
rotation?): Promise<null | Pickup>
```

Create a pickup in a specific position in the world with a specified type and value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of pickup. |
| `position` | [`Vector3`](Vector3.md) | The position in the world it should be spawned. |
| `model` | [`Model`](Model.md) | The model of the spawned pickup. |
| `value` | `number` | Give a value for the pickup when picked up. |
| `rotation`? | [`Vector3`](Vector3.md) | If set, create a rotating pickup with this rotation. |

#### Returns

`Promise`\<`null` \| [`Pickup`](Pickup.md)\>

Pickup object.

#### Defined in

[src/client/World.ts:572](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L572)

***

### createBlip()

```ts
static createBlip(position, radius?): Blip
```

Creates a blip at a given position and optionally radius.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myStoreBlip = World.createBlip(position, 5.0);
myStoreBlip.Sprite = BlipSprite.Store;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | World coordinate of blip. |
| `radius`? | `number` | (Optional) Radius of where blip should be shown. |

#### Returns

[`Blip`](Blip.md)

Blip object.

#### Defined in

[src/client/World.ts:304](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L304)

***

### createCamera()

```ts
static createCamera(cameraType, active): Camera
```

Creates a cam that defaults to [CameraTypes.Scripted](../enumerations/CameraTypes.md)

```ts
const cam = World.createCamera(CameraTypes.Spline, true);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cameraType` | [`CameraTypes`](../enumerations/CameraTypes.md) | `CameraTypes.Scripted` | the camera type to create |
| `active` | `boolean` | `true` | unknown |

#### Returns

[`Camera`](Camera.md)

#### Defined in

[src/client/World.ts:321](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L321)

***

### createCameraWithParams()

```ts
static createCameraWithParams(
   cameraType, 
   position, 
   rotation, 
   fieldOfView): Camera
```

Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cameraType` | [`CameraTypes`](../enumerations/CameraTypes.md) | `CameraTypes.Scripted` | - |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World coordinate where the camera should render. |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` | Rotation of camera relative to world. |
| `fieldOfView` | `number` | `undefined` | Field of view angle of camera. |

#### Returns

[`Camera`](Camera.md)

Camera object.

#### Defined in

[src/client/World.ts:338](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L338)

***

### createPed()

```ts
static createPed(
   model, 
   position, 
   heading, 
isNetwork): Promise<null | Ped>
```

Create a ped at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("a_f_m_beach_01");
const myPed = await World.createPed(model, position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | Ped model to be spawned. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Ped spawn. |
| `heading` | `number` | `0` | Heading of Ped when spawning. |
| `isNetwork` | `boolean` | `true` |  |

#### Returns

`Promise`\<`null` \| [`Ped`](Ped.md)\>

Ped object.

#### Defined in

[src/client/World.ts:375](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L375)

***

### createProp()

```ts
static createProp(
   model, 
   position, 
   dynamic, 
   placeOnGround, 
isNetwork): Promise<null | Prop>
```

Spawns a [[`Prop`]] at the given position.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("prop_barrel_02a");
const myBarrelProp = await World.createProp(model, position, false, true);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | The [[`Model`]] to spawn (must be a Prop) |
| `position` | [`Vector3`](Vector3.md) | `undefined` | Location of Prop |
| `dynamic` | `boolean` | `undefined` | If set to true, the Prop will have physics otherwise it's static. |
| `placeOnGround` | `boolean` | `undefined` | If set to true, sets the Prop on the ground nearest to position. |
| `isNetwork` | `boolean` | `true` |  |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

Prop object.

#### Defined in

[src/client/World.ts:540](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L540)

***

### createRandomPed()

```ts
static createRandomPed(position): Ped
```

Creates a [[`Ped`]] with a random model.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomPed = World.createRandomPed(position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | World coordinate of Ped spawn. |

#### Returns

[`Ped`](Ped.md)

Ped object.

#### Defined in

[src/client/World.ts:400](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L400)

***

### createRandomVehicle()

```ts
static createRandomVehicle(
   position, 
   heading, 
isNetwork): Promise<null | Vehicle>
```

Create a random vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomVehicle = await World.createRandomVehicle(position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Vehicle spawn. |
| `heading` | `number` | `0` | Heading of Vehicle when spawning. |
| `isNetwork` | `boolean` | `true` |  |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

Vehicle object.

#### Defined in

[src/client/World.ts:446](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L446)

***

### createRope()

```ts
static createRope(
   position, 
   rotation, 
   maxLength, 
   ropeType, 
   initLength, 
   minLength, 
   lengthChangeRate, 
   onlyPPU, 
   collisionOn, 
   lockFromFront, 
   timeMultiplier, 
   breakable, 
shouldLoadTextures): Promise<Rope>
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `maxLength` | `number` | `undefined` |
| `ropeType` | [`RopeType`](../enumerations/RopeType.md) | `undefined` |
| `initLength` | `number` | `undefined` |
| `minLength` | `number` | `undefined` |
| `lengthChangeRate` | `number` | `1.0` |
| `onlyPPU` | `boolean` | `false` |
| `collisionOn` | `boolean` | `false` |
| `lockFromFront` | `boolean` | `false` |
| `timeMultiplier` | `number` | `1.0` |
| `breakable` | `boolean` | `false` |
| `shouldLoadTextures` | `boolean` | `true` |

#### Returns

`Promise`\<[`Rope`](Rope.md)\>

#### Defined in

[src/client/World.ts:477](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L477)

***

### createVehicle()

```ts
static createVehicle(
   model, 
   position, 
   heading, 
isNetwork): Promise<null | Vehicle>
```

Create a vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("adder");
const myVehicle = await World.createVehicle(model, position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | Vehicle model to be spawned. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Vehicle spawn. |
| `heading` | `number` | `0` | Heading of Vehicle when spawning. |
| `isNetwork` | `boolean` | `true` |  |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

Vehicle object.

#### Defined in

[src/client/World.ts:419](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L419)

***

### destroyAllCameras()

```ts
static destroyAllCameras(): void
```

Destroys all existing cameras and sets your rendering camera back to GameplayCam.

#### Returns

`void`

#### Defined in

[src/client/World.ts:287](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L287)

***

### drawLightWithRange()

```ts
static drawLightWithRange(
   pos, 
   color, 
   range, 
   intensity): void
```

Creates a light in the world with a certain length (range).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate where to draw the light. |
| `color` | [`Color`](Color.md) | RGB colors of the light. |
| `range` | `number` | How far to draw the light. |
| `intensity` | `number` | Intensity of the light ("alpha"). |

#### Returns

`void`

#### Defined in

[src/client/World.ts:723](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L723)

***

### drawLine()

```ts
static drawLine(
   start, 
   end, 
   color): void
```

Draws a line in the world. It's not possible to change thickness.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | [`Vector3`](Vector3.md) | World coordinate of start position of line. |
| `end` | [`Vector3`](Vector3.md) | World coordinate of end position of line. |
| `color` | [`Color`](Color.md) | RGB color of line. |

#### Returns

`void`

#### Defined in

[src/client/World.ts:820](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L820)

***

### drawMarker()

```ts
static drawMarker(
   type, 
   position, 
   direction, 
   rotation, 
   scale, 
   color, 
   bobUpAndDown, 
   faceCamera, 
   rotateY, 
   textureDict, 
   textureName, 
   drawOnEntity): void
```

Draw a marker at a desired location. Careful! Must be drawn every tick.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const zeroVector = new Vector3(0,0,0);

setTick(() => {
 World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
})
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `type` | [`MarkerType`](../enumerations/MarkerType.md) | `undefined` | Type of marker. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | Location of marker. |
| `direction` | [`Vector3`](Vector3.md) | `undefined` | Direction facing. |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` | World rotation. |
| `scale` | [`Vector3`](Vector3.md) | `undefined` | Size of marker. |
| `color` | [`Color`](Color.md) | `undefined` | Color of marker. |
| `bobUpAndDown` | `boolean` | `false` | Animated movement along marker's own X axis. |
| `faceCamera` | `boolean` | `false` | Rendering marker facing rendering camera. |
| `rotateY` | `boolean` | `false` | Rotate along Y axis. |
| `textureDict` | `null` \| `string` | `null` | Custom texture dictionary for custom marker. |
| `textureName` | `null` \| `string` | `null` | Custom texture name for custom marker. |
| `drawOnEntity` | `boolean` | `false` | Render the marker on an entity. |

#### Returns

`void`

#### Defined in

[src/client/World.ts:673](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L673)

***

### drawPoly()

```ts
static drawPoly(
   vertexA, 
   vertexB, 
   vertexC, 
   color): void
```

Draw polygon in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexA` | [`Vector3`](Vector3.md) | World coordinate of first point. |
| `vertexB` | [`Vector3`](Vector3.md) | World coordinate of second point. |
| `vertexC` | [`Vector3`](Vector3.md) | World coordinate of third point. |
| `color` | [`Color`](Color.md) | RGB color of polygon. |

#### Returns

`void`

#### Defined in

[src/client/World.ts:832](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L832)

***

### drawSpotLight()

```ts
static drawSpotLight(
   pos, 
   dir, 
   color, 
   distance, 
   brightness, 
   roundness, 
   radius, 
   fadeOut): void
```

Creates a light in the world. More configurable than World.drawLightWithRange.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate of spotlight. |
| `dir` | [`Vector3`](Vector3.md) | Direction to face spotlight. |
| `color` | [`Color`](Color.md) | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

#### Defined in

[src/client/World.ts:744](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L744)

***

### drawSpotLightWithShadow()

```ts
static drawSpotLightWithShadow(
   pos, 
   dir, 
   color, 
   distance, 
   brightness, 
   roundness, 
   radius, 
   fadeOut): void
```

Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate of spotlight. |
| `dir` | [`Vector3`](Vector3.md) | Direction to face spotlight. |
| `color` | [`Color`](Color.md) | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

#### Defined in

[src/client/World.ts:784](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L784)

***

### getAllPeds()

```ts
static getAllPeds(): Ped[]
```

Get all [[`Ped`]] entities in your own scope.

#### Returns

[`Ped`](Ped.md)[]

Array of Peds.

#### Defined in

[src/client/World.ts:970](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L970)

***

### getAllPickups()

```ts
static getAllPickups(): Pickup[]
```

Get all [[`Pickup`]] entities using the GetGamePool.

#### Returns

[`Pickup`](Pickup.md)[]

Array of Pickups.

#### Defined in

[src/client/World.ts:1021](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L1021)

***

### getAllProps()

```ts
static getAllProps(): Prop[]
```

Get all [[`Prop`]] entities in your own scope.

#### Returns

[`Prop`](Prop.md)[]

Array of Props.

#### Defined in

[src/client/World.ts:942](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L942)

***

### getAllRopes()

```ts
static getAllRopes(): Rope[]
```

Get all [[`Rope`]] entities in your own scope.

#### Returns

[`Rope`](Rope.md)[]

Array of Ropes.

#### Defined in

[src/client/World.ts:956](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L956)

***

### getAllVehicles()

```ts
static getAllVehicles(): Vehicle[]
```

Get all [[`Vehicle`]] entities in your own scope.

#### Returns

[`Vehicle`](Vehicle.md)[]

Array of Vehicles.

#### Defined in

[src/client/World.ts:984](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L984)

***

### getClosestObject()

```ts
static getClosestObject(
   model, 
   coords, 
   radius, 
   isMission): null | Prop
```

Gets the closest object of this model

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` |
| `coords` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `25.0` |
| `isMission` | `boolean` | `false` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Defined in

[src/client/World.ts:915](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L915)

***

### getClosestVehicle()

```ts
static getClosestVehicle(coords): null | Vehicle
```

Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `coords` | [`Vector3`](Vector3.md) |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

the closest vehicle or null

#### Defined in

[src/client/World.ts:997](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L997)

***

### raycast()

```ts
static raycast(
   source, 
   direction, 
   maxDistance, 
   options, 
   ignoreEntity): RaycastResult
```

Cast ("shoot") a ray in a certain direction to detect entities in the way.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`Vector3`](Vector3.md) | Starting position of raycast. |
| `direction` | [`Vector3`](Vector3.md) | Direction to cast a ray to. |
| `maxDistance` | `number` | Max distance to cast the ray. |
| `options` | [`IntersectOptions`](../enumerations/IntersectOptions.md) | Possible entity types to detect. |
| `ignoreEntity` | [`BaseEntity`](BaseEntity.md) | An entity to ignore (usually player's Ped). |

#### Returns

[`RaycastResult`](RaycastResult.md)

RaycastResult object.

#### Defined in

[src/client/World.ts:860](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L860)

***

### raycastPlayerCamera()

```ts
static raycastPlayerCamera(maxDistance, options): RaycastResult
```

Cast a ray from the local players camera until it hits an entity

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxDistance` | `number` | Max distance to cast the ray. |
| `options` | [`IntersectOptions`](../enumerations/IntersectOptions.md) | Possible entity types to detect. |

#### Returns

[`RaycastResult`](RaycastResult.md)

RaycastResult object.

#### Defined in

[src/client/World.ts:891](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L891)

***

### transitionToWeather()

```ts
static transitionToWeather(weather, duration): void
```

Transition to different weather type within a certain time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weather` | [`Weather`](../enumerations/Weather.md) | Weather type to change to. |
| `duration` | `number` | Time for full weather change (in milliseconds); |

#### Returns

`void`

#### Defined in

[src/client/World.ts:278](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/World.ts#L278)
