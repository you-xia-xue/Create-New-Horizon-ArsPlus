GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create("steam_piston_hammer", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.FORGE_HAMMER_RECIPES)
        .recipeModifier((machine, recipe,params,results) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe,params,results), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", "A#A", "###", "###", "###", "AAA")
            .aisle("ABA", "ACA", "A#A", "ABA", "ADA", "AAA")
            .aisle("A@A", "A#A", "###", "###", "###", "AAA")
            .where("A", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM)))
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("minecraft:iron_block"))
            .where("C", Predicates.blocks("minecraft:anvil"))
            .where("D", Predicates.blocks("minecraft:sticky_piston"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/forge_hammer")

    event.create("steam_pressor", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.COMPRESSOR_RECIPES)
        .recipeModifier((machine, recipe,params,results) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe,params,results), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("XXX", "XXX", "XXX")
            .aisle("XXX", "X#X", "XXX")
            .aisle("XXX", "X#X", "XXX")
            .aisle("XXX", "XSX", "XXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(10)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM)))
            .where("#", Predicates.air())
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/compressor")

    event.create("steam_foundry", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
        .recipeModifier((machine, recipe,params,results) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, params,results), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("FFF", "XXX", "XXX")
            .aisle("FFF", "X#X", "XXX")
            .aisle("FFF", "XSX", "XXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("F", Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1)))
            .where("X", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(6)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)))
            .where("#", Predicates.air())
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/alloy_smelter")
    
    event.create("steam_centrifuge", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.CENTRIFUGE_RECIPES)
        .recipeModifier((machine, recipe,params,results) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, params,results), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#AAA#", "#####", "#####", "#####", "#####", "#####", "#AAA#")
            .aisle("AAAAA", "#BAB#", "#BCB#", "#BCB#", "#BCB#", "#BAB#", "AAAAA")
            .aisle("AAAAA", "#ADA#", "#CDC#", "#CDC#", "#CDC#", "#ADA#", "AAAAA")
            .aisle("AAAAA", "#BAB#", "#BCB#", "#BCB#", "#BCB#", "#BAB#", "AAAAA")
            .aisle("#A@A#", "#####", "#####", "#####", "#####", "#####", "#AAA#")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:steam_machine_casing")
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)))
            .where("B", Predicates.blocks("gtceu:bronze_frame"))
            .where("C", Predicates.blocks("ctnhcore:bronze_framed_glass"))
            .where("D", Predicates.blocks("gtceu:bronze_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/centrifuge")
    

})