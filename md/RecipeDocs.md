# Adding Custom Recipes
Custom recipes can be added by mods in 2 different ways:  
- Vanilla craftbot recipes, which are also compatible with the Modded Craftbot Recipes mod.
- Crashlander bench-specific recipes, only compatible with Crashlander's benches.

# Vanilla Craftbot Recipes
- Such recipes in Crashlander show up in the "Modded Craftbot", which unlocks only if a mod is enabled.
- Create new folder in your mod root folder named "CraftingRecipes"
- In there, create new file named "craftbot.json"
- Add your recipes to that file, example:
    ```json
    [
        { //1st recipe
            "itemId": "8c7efc37-cd7c-4262-976e-39585f8527bf", //uuid of the crafted item
            "extras": [ //extra items to receive after crafting (can be ommited)
                { //extra item 1
                    "itemId": "798c2c81-1f8e-481b-8c32-b71b5dc5511a", //uuid of item given
                    "quantity": 1 //amount of item given
                }
            ],
            "quantity": 1, //amount of the crafted item
            "craftTime": 32, //craft time in seconds (the crafter adds 3 more seconds, because of animations)
            "ingredientList": [ //recipe ingredients
                { //ingredient 1
                    "quantity": 10, //amount of item needed
                    "itemId": "1f7ac0bb-ad45-4246-9817-59bdf7f7ab39" //uuid of item needed
                },
                { //ingredient 2
                    "quantity": 2, //amount of item needed
                    "itemId": "f152e4df-bc40-44fb-8d20-3b3ff70cdfe3" //uuid of item needed
                }
            ]
        },
        { //2nd recipe
            "itemId": "8c7efc37-cd7c-4262-976e-39585f8527bf", //uuid of the crafted item
            "extras": [ //extra items to receive after crafting (can be ommited)
                { //extra item 1
                    "itemId": "798c2c81-1f8e-481b-8c32-b71b5dc5511a", //uuid of item given
                    "quantity": 1 //amount of item given
                }
            ],
            "quantity": 1, //amount of the crafted item
            "craftTime": 32, //craft time in seconds (the crafter adds 3 more seconds, because of animations)
            "ingredientList": [ //recipe ingredients
                { //ingredient 1
                    "quantity": 10, //amount of item needed
                    "itemId": "1f7ac0bb-ad45-4246-9817-59bdf7f7ab39" //uuid of item needed
                },
                { //ingredient 2
                    "quantity": 2, //amount of item needed
                    "itemId": "f152e4df-bc40-44fb-8d20-3b3ff70cdfe3" //uuid of item needed
                }
            ]
        }
    ]
    ```

# Crashlander Bench-Specific Recipes
- Each recipe shows up in the bench you assign it to
- Create new folder in your mod root folder named "CraftingRecipes"
- Inside that folder, create a new folder named "Crashlander"
- In there, create new file named:
	- "anvil.json" for "Metalworking Bench" recipes
	- "craftingbench.json" for "Workbench" recipes
	- "scrapcraftingbench.json" for "Scrap Workbench" recipes
	- "cookingbench.json" for "Cooking Bench" recipes
	- "carpentingbench.json" for "Woodworking Bench" recipes
	- "chemistrybench.json" for "Chemistry Bench" recipes
	- "furnace.json" for "Smeltery" recipes
- Add your recipes to that file, example:
    ```json
    [
        { //1st recipe
            "itemId": "8c7efc37-cd7c-4262-976e-39585f8527bf", //uuid of the crafted item
            "extras": [ //extra items to receive after crafting (can be ommited)
                { //extra item 1
                    "itemId": "798c2c81-1f8e-481b-8c32-b71b5dc5511a", //uuid of item given
                    "quantity": 1 //amount of item given
                }
            ],
            "quantity": 1, //amount of the crafted item
            "craftTime": 32, //craft time in seconds (the crafter adds 3 more seconds, because of animations)
            "ingredientList": [ //recipe ingredients
                { //ingredient 1
                    "quantity": 10, //amount of item needed
                    "itemId": "1f7ac0bb-ad45-4246-9817-59bdf7f7ab39" //uuid of item needed
                },
                { //ingredient 2
                    "quantity": 2, //amount of item needed
                    "itemId": "f152e4df-bc40-44fb-8d20-3b3ff70cdfe3" //uuid of item needed
                }
            ]
        },
        { //2nd recipe
            "itemId": "8c7efc37-cd7c-4262-976e-39585f8527bf", //uuid of the crafted item
            "extras": [ //extra items to receive after crafting (can be ommited)
                { //extra item 1
                    "itemId": "798c2c81-1f8e-481b-8c32-b71b5dc5511a", //uuid of item given
                    "quantity": 1 //amount of item given
                }
            ],
            "quantity": 1, //amount of the crafted item
            "craftTime": 32, //craft time in seconds (the crafter adds 3 more seconds, because of animations)
            "ingredientList": [ //recipe ingredients
                { //ingredient 1
                    "quantity": 10, //amount of item needed
                    "itemId": "1f7ac0bb-ad45-4246-9817-59bdf7f7ab39" //uuid of item needed
                },
                { //ingredient 2
                    "quantity": 2, //amount of item needed
                    "itemId": "f152e4df-bc40-44fb-8d20-3b3ff70cdfe3" //uuid of item needed
                }
            ]
        }
    ]
    ```