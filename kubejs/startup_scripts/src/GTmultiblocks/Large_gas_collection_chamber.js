GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('gas_collection_h', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_gas_collection_chamber', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('gas_collection_h') 
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            let parallel = 1
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe, params, result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(() => Block.getBlock("gtceu:plascrete"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .aisle("ABBBA", "BCCCB", "BCCCB", "BCCCB", "ABBBA")
            .aisle("ABBBA", "BDDDB", "BDEDB", "BDDDB", "ABBBA")
            .aisle("ABBBA", "BCCCB", "BCCCB", "BCCCB", "ABBBA")
            .aisle("AAAAA", "ABBBA", "AB@BA", "ABBBA", "AAAAA")
            .where("A", Predicates.blocks("gtceu:plascrete")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("B", Predicates.blocks("gtceu:filter_casing"))
            .where("C", Predicates.blocks("gtceu:hv_hermetic_casing"))
            .where("D", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("E", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/cleanroom/plascrete', 'gtceu:block/multiblock/fusion_reactor', false)
})

