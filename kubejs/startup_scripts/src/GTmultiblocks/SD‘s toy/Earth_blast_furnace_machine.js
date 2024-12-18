GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("large_steel_furnaces", "multiblock")
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.FURNACE_RECIPES)
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            let parallel = 32
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe, params, result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(() => Block.getBlock('gtceu:firebricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", "BBB", "BBB", "#B#")
            .aisle("AAA", "BCB", "BAB", "#B#")
            .aisle("AAA", "B@B", "BBB", "#B#")
            .where("A", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("B", Predicates.blocks("gtceu:firebricks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("#", Predicates.any())
            .where("C", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_primitive_bricks', 'gtceu:block/multiblock/implosion_compressor', false)

    event.create("large_steel_alloy_furnace", "multiblock")
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            let parallel = 32
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe, params, result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(() => Block.getBlock('gtceu:firebricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABA", "CCC", "CBC", "CCC")
            .aisle("BBB", "CCC", "BDB", "CCC")
            .aisle("ABA", "C@C", "CBC", "CCC")
            .where("A", Predicates.blocks("gtceu:steel_frame"))
            .where("B", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("C", Predicates.blocks("gtceu:firebricks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_primitive_bricks', 'gtceu:block/machines/alloy_smelter', false)
})