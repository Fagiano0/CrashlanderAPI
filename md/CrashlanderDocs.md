# Gui
Gui-related functions.

### **createDialogGui**
```lua
sm.crashlander.createDialogGui( text, optionsAmount, optionsTexts, optionsCallback, icon, displayedName, isSelfTalkGui, forceHud )
```
*Client only*  
Creates a dialog gui with the given parameters.

**Arguments:**  
* `text` [ **string** ] The text that should be displayed.  
* `optionsAmount` [ **number** ] The amount of options. *(allowed: 0, 1, 2, 3)*  
* `optionsTexts` [ **table**? ] A table containing the strings displayed in the options in order. *(default: "Accept", "Decline", "Leave")*  
* `optionsCallback` [ **string** ] The name of the callback to be called when an option is chosen.  
* `icon` [ **string**? ] The path to the icon that should be displayed. *(default: "player")*  
* `displayedName` [ **string**? ] The name to display under the icon. *(default: "")*  
* `isSelfTalkGui` [ **boolean**? ] Whether the gui is a "self talk" gui. *(only allowed with 0 options)*  
* `forceHud` [ **boolean**? ] Whether to force the gui to be a hud or not. *(default: false)*  

**Returns:**  
* [ **GuiInterface** ] The created dialog gui.  

---

### **createToolChargeGui**
```lua
sm.crashlander.createToolChargeGui( iconPath )
```
*Client only*  
Creates a tool charge gui with the given icon.  

**Arguments:**  
* `iconPath` [ **string** ] The path to the icon.  

**Returns:**  
* [ **GuiInterface** ] The created tool charge gui.  

---

### **getNamedIconPath**
```lua
sm.crashlander.getNamedIconPath( name )
```
*Client only*  
Returns the path to the icon with the given name, returns *nil* if the name is invalid.  

>**Valid icon names:**  
>"player"  
>"playerFemale"  
>"playerMale"  
>"loneGuy"  
>"mark"  
>"ivan"  
>"justin"  
>"hank"  

**Arguments:**  
* `name` [ **string** ] The name of the icon.

**Returns:**  
* [ **string**? ] The path of the icon, *nil* if invalid.

---

### **getInteractionIconScreenSize**
```lua
sm.crashlander.getInteractionIconScreenSize()
```
*Client only*  
Returns the screen size for icons in interaction texts.

**Returns:**  
* [ **string** ] Screen size.  

---

### **getDisplayName**
```lua
sm.crashlander.getDisplayName( name )
```
*Client only*  
Returns a translated string if a language tag with the given name exists, otherwise returns the given name.

**Arguments:**
* `name` [ **string**? ] The name.

**Returns:**  
* [ **string** ] The translated name or given name. 

---

### **addLanguageTagSet**
```lua
sm.crashlander.addLanguageTagSet( path, language )
```
*Server only*  
Adds a langugage tag set to crashlander's language tag system.  
Allows for easily adding translations for any string.

**Arguments:**
* `path` [ **string** ] The path to the json file containing the tags. The path has to use `$CONTENT_<uuid of your mod>` instead of `$CONTENT_DATA`, or else it will refer to the Crashlander files. (You can find the uuid of your mod in description.json in the root folder of your mod)
* `language` [ **[LanguageName](#languagename)** ] The language that the tags are for.

---

###
# Weather
Crashlander's weather system.

### **getCurrentWeatherType**
```lua
sm.crashlander.getCurrentWeatherType()
``` 
Returns the current weather type.  
See **[sm.crashlander.weatherTypes](#weathertypes)**.  

**Returns:**  
* [ **integer** ] The current weather type.  

---

### **getCurrentWeatherData**
```lua
sm.crashlander.getCurrentWeatherData()
``` 
*Client only*  
Returns the current translated weather string and weather icon.  
See **[sm.crashlander.weatherTypes](#weathertypes)**.  

**Returns:**  
* [ **string** ] The current weather type.  
* [ **string** ] The icon path.

---

### **isRaining**
```lua
sm.crashlander.isRaining()
``` 
Returns whether the current weather has rain in it.  
See **[sm.crashlander.weatherTypes](#weathertypes)**.  

**Returns:**  
* [ **boolean** ] Whether it's raining or not.  

---

### **weatherTypes**
```lua
sm.crashlander.weatherTypes = {
    clear = 0,
    rain = 1,
    cloudy = 2,
	verycloudy = 3,
	fog = 4,
    storm = 5,
}
```
A table of all weather types.  

---

###
# Equipment
Crashlander's equipment system.

### **addEquipment**
```lua
sm.crashlander.addEquipment(uuid, slot, renderable, stats, onUpdate, onUse, setId)
```
Adds a new equipment item to the equipment system.

**Arguments:**  
* `uuid` [ **Uuid** ] UUID of the item.
* `slot` [ **[EquipmentSlot](#equipmentslot)** ] The slot that the equipment will be used in, check **[sm.crashlander.equipmentSlots](#equipmentslots)**.
* `renderable` [ **string** ] Path to the renderable of the equipment.
* `stats` [ **[EquipmentStats](#equipmentstats)**? ] The stats of the equipment, optional, defaults to no special stats.
* `onUpdate` [ **[EquipmentCallback](#equipmentcallback)**? ] The function that will be called when the equipment is equipped/unequipped, optional. The callback recieves an [[EquipmentCallbackArgument](#equipmentcallbackargument)] object as an argument. **Client only**  
* `onUse` [ **[EquipmentCallback](#equipmentcallback)**? ] The function that will be called when the equipment is used(player presses R), optional. The callback recieves the [Player] that has the item equipped as an argument. **Client only**
* `setId` [ **string**? ] The set id of the equipment, optional. **Client only**

---

### **getEquipmentList**
```lua
sm.crashlander.getEquipmentList( character )
```
Returns a list of equipped items.

**Argument:**  
* `character` [ **Character** ] The player's character.

**Returns:** 
* [ **[EquipmentItem](#equipmentitem)[]** ] The list of equipped items.

---

### **isEquipmentEquipped**
```lua
sm.crashlander.isEquipmentEquipped( character, uuid )
```
Returns whether the equipment item is equipped.

**Argument:**  
* `character` [ **Character** ] The player's character. 
* `uuid` [ **Uuid** ] The uuid of the equipment.

**Returns:** 
* [ **boolean** ] Whether the item is equipped or not.
* [ **[EquipmentItem](#equipmentitem)**? ] The equipment item.

---

### **isEquipmentSetEquipped**
```lua
sm.crashlander.isEquipmentSetEquipped( character, setId )
```
Returns whether the equipment set is equipped.

**Arguments:**  
* `character` [ **Character** ] The player's character.
* `setId` [ **string** ] The id of the equipment set.

**Returns:**  
* [ **boolean** ] Whether the set is equipped.

---

### **equipmentSlots**
```lua
sm.crashlander.equipmentSlots = {
    head = "head",
    torso = "torso",
    leg = "leg",
    foot = "foot",
    accessory = "acc"
}
```
A list of crashlander's equipment slots.

---

###
# Utils
Other utilities.

### **version**
```lua
sm.crashlander.version
```
The current version of crashlander as a string.

---

### **hasSoundDLC**
```lua
sm.crashlander.hasSoundDLC()
```
Whether the Crashlander Audio Enhancement DLC is installed.  

---

### **getCompletedAchievementCount**
```lua
sm.crashlander.getCompletedAchievementCount()
```
Returns the amount of completed achievements.  

**Returns:**  
* [ **number** ] The amount of completed achievements.  

---

### **npcUuids**
```lua
sm.crashlander.npcUuids = {
    sm.uuid.new("36b1e8ff-8ffa-4b75-a548-1d6377434d53"),
    sm.uuid.new("4296f22c-1205-4035-bad8-e12120fce5a8"),
    sm.uuid.new("bf3982d8-ac96-47c0-b8b7-224f822180e2"),
    sm.uuid.new("ae6310a3-ea6c-4e8e-ac28-407bb0c2dfb1"),
    sm.uuid.new("538ec386-f714-4cde-bd82-ade0d6f5edbf")
}
```
A list of crashlander npc uuids.

---

### **fetchRecipeByUUID**
```lua
sm.crashlander.fetchRecipeByUUID( uuid )
```
Returns the recipe of an item by it's *uuid* or *string* uuid.  

**Arguments:**  
* `uuid` [ **Uuid** | **string** ] The uuid or string uuid of the recipe.  

**Returns:**
* [ **table** ] The recipe table.  

---

### **isServer**
```lua
sm.crashlander.isServer()
```
Returns whether the function is being run on the server.  

**Returns:**  
* [ **boolean** ] Whether the function is being run by the server or not.

---

### **isActionBound**
```lua
sm.crashlander.isActionBound( action )
```
Returns whether the player has a keybind bound to the specified action.  

**Arguments:**  
* `action` [ **string** ] The action name, e.g. "Use", "Reload", "Tinker".  

**Returns:**  
* [ **boolean** ] Whether the action is bound or not.  

---

### **isInLiquid**
```lua
sm.crashlander.isInLiquid( areaTrigger, filter )
```
Checks whether the given areaTrigger is inside a liquid.  

**Arguments:**  
* `areaTrigger` [ **AreaTrigger** ] The areaTrigger to check.  
* `filter` [ **[LiquidFilter](#liquidfilter)**? ] The liquids to check for. *(default: { water = true, chemical = true, oil = true })*  

**Returns:**  
* [ **bool** ] Whether the areaTrigger is in a liquid that's in the filter.  

---

### **getMaterialIndex**
```lua
sm.crashlander.getMaterialIndex( matString )
```
Returns the index of a material from its string.  

**Arguments:**  
* `matString` [ **string** ] The material string.  

**Returns:**  
* [ **integer** ] The material index, or 9 (Metal) if not found.  

---

### **getCellPosition**
```lua
sm.crashlander.getCellPosition( x, y )
```
Gets cell coordinates from world coordinates.  

**Arguments:**  
* `x` [ **number** ] The world X position.  
* `y` [ **number** ] The world y position.  

**Returns:**  
* [ **integer** ] The cell X position.  
* [ **integer** ] The cell Y position.  

---

### **getBiomeAt**
```lua
sm.crashlander.getBiomeAt( x, y, asString )
```
*Server only*  
Gets cell biome from world position.  

**Arguments:**  
* `x` [ **number** ] The X position.  
* `y` [ **number** ] The y position.  
* `asString` [ **boolean** ] Whether to return the biome as string, otherwise as index.  

**Returns:**  
* [ [**BiomeString**](#biomestring)? | **integer**? ] The biome index or string, *nil* if story location.  

---

### **doesUnitExist**
```lua
sm.crashlander.doesUnitExist( uuid )
```
*Server only*  
Checks if atleast one unit with this character uuid exists.

**Arguments:**  
* `uuid` [ **Uuid** ] The character uuid to check for.  

**Returns:**  
* [ **bool** ] Whether a unit with this character uuid currently exists.  

--- 

### **getUnitQuantity**
```lua
sm.crashlander.getUnitQuantity( uuid )
```
*Server only*  
Checks how many units with this character uuid exist.

**Arguments:**  
* `uuid` [ **Uuid** ] The character uuid to check for.  

**Returns:**  
* [ **integer** ] How many units with this character uuid exist.  

--- 

### **killUnitsOfUuid**
```lua
sm.crashlander.killUnitsOfUuid( uuid )
```
*Server only*  
Kills all units with this character uuid.

**Arguments:**  
* `uuid` [ **Uuid** ] The character uuid to check for.  

--- 

### **getPlayerByName**
```lua
sm.crashlander.getPlayerByName( name )
```
Returns the player with the given name.  

**Arguments:**  
* `name` [ **string** ] The name of the player.

**Returns:**  
* [ **Player**? ] The player, *nil* if none is found.

--- 

### **getPlayersInRange**
```lua
sm.crashlander.getPlayersInRange( pos, distance, maxAmount )
```
Returns players that are in a certain distance around a provided point.  

**Arguments:**  
* `pos` [ **Vec3** ] The position to look around.
* `distance` [ **number** ] The distance to look in.
* `maxAmount` [ **integer**? ] Max amount of players to return, *nil* for infinite.

**Returns:**  
* [ **Player[]** ] Table of players in range.  

---

### **getRandomColor**
```lua
sm.crashlander.getRandomColor()
```
Returns a random color.

**Returns:**  
* [ **Color** ] The random color.  

---

### **getIndexOf**
```lua
sm.crashlander.getIndexOf( item, tbl )
```
Returns the index of the item in the table.  

**Arguments:**  
* `item` [ **any** ] The thing to check for.  
* `tbl` [ **table** ] The table to check in.  

**Returns:**  
* [ **integer**? ] The index, nil if the item isn't in the table.  

---

### **combineTables**
```lua
sm.crashlander.combineTables( ... )
```
Returns a table combining the tables provided into the function.

**Arguments:**  
* `...` [ **table** ] Variable amount of tables.

**Returns:**  
* [ **table** ] The combined table.

---

### **getRealLength**
```lua
sm.crashlander.getRealLength( tbl )
```
Returns the real length of a table.  
Unlike `#table`, this function also works for tables with keys.

**Arguments:**
* `tbl` [ **table** ] The table.

**Returns:**
* [ **number** ] The length.

---

### **getByIndex**
```lua
sm.crashlander.getByIndex( tbl, index )
```
Returns an item from the table by a number index.  
Unlike `table[number]`, this function gets items from tables using an index even if the table has keys.

**Arguments:**
* `tbl` [ **table** ] The table.
* `index` [ **number** ] The index.

**Returns:**
* [ **any** ] The item.

---

### **areAnyOf**
```lua
sm.crashlander.areAnyOf( tbl, tbl2 )
```
Returns whether any item from tbl is present in tbl2.  

**Arguments:**
* `tbl` [ **table** ] The table.  
* `tbl2` [ **table** ] The other table.  

**Returns:**
* [ **boolean** ] Whether any item from tbl is present in tbl2.  

---

### **getContainerItems**
```lua
sm.crashlander.getContainerItems( container )
```
Returns a table of all contents inside the specified container.  

**Arguments:**
* `container` [ **Container** ] The container.

**Returns:**
* [ **table** ] A table of all items inside the container.

---

### **ordinalizeNumber**
```lua
sm.crashlander.ordinalizeNumber( num )
```
*Client only*  
Returns the given number or number string with Ordinal Indication.  

**Arguments:**
* `num` [ **number** | **string** ] The number.

**Returns:**
* [ **string** ] The number string with Ordinal Indication.

---

###
# Documentation Classes
Classes used purely for documenting specific values or table structures.

### EquipmentSlot
Any string from [sm.crashlander.equipmentSlots](#equipmentslots).

---

### EquipmentItem
Table contents:
* `uuid` [ **Uuid** ]
* `slot` [ **[EquipmentSlot](#equipmentslot)** ]
* `renderable` [ **string**? ]
* `stats` [ **[EquipmentStats](#equipmentstats)**? ]
* `onUpdate` [ **string**? ]
* `onUse` [ **string**? ]
* `setId` [ **string**? ]

---

### EquipmentStats
Table contents:
* `damageReduction` [ **number**? ] The amount of damage that the equipment will block(in percents)
* `oxygenMultiplier` [ **number**? ] The amount the oxygen will be multiplied by when equipped
* `waterMovementMultiplier` [ **number**? ] The amount the swim speed will be multiplied by when equpped

---

### EquipmentCallback
Table contents:
* `callback` [ **string** ] The name of the function that will be called.
* `object` [ **Harvestable** | **ScriptableObject** | **Character** | **Tool** | **Interactable** | **Unit** | **Player** | **World** ] The reference to the object that the function will be called on.

---

### EquipmentCallbackArgument
Table contents:
* `state` [ **boolean** ]
* `player` [ **Player** ]

---

### BiomeString
Any of the following strings:
* `"TYPE_MEADOW"`
* `"TYPE_FOREST"`
* `"TYPE_DESERT"`
* `"TYPE_FIELD"`
* `"TYPE_BURNTFOREST"`
* `"TYPE_AUTUMNFOREST"`
* `"TYPE_TAYGA"`
* `"TYPE_LAKE"`

---

### LiquidFilter
Table contents:
* `water` [ **boolean**? ]
* `chemical` [ **boolean**? ]
* `oil` [ **boolean**? ]

---

### LanguageName
Any of the following strings:
* `"Brazilian"`
* `"Chinese"`
* `"English"`
* `"French"`
* `"German"`
* `"Italian"`
* `"Japanese"`
* `"Korean"`
* `"Polish"`
* `"Russian"`
* `"Spanish"`

---