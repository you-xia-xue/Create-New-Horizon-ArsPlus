GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('decay_pools')
        .category('decay_pools')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('decay_pools_machine', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('decay_pools')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##A#A##", "##A#A##", "##AAA##", "##AAA##", "##AAA##", "###A###", "#######")
            .aisle("#######", "##AAA##", "#ABBBA#", "#ABBBA#", "#ABBBA#", "##AAA##", "###A###")
            .aisle("A#AAA#A", "AABBBAA", "ABC#CBA", "AB#D#BA", "ABC#CBA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "AB###BA", "AB#D#BA", "AB###BA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "ABC#CBA", "AB#D#BA", "ABC#CBA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "AB###BA", "AB#D#BA", "AB###BA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "AB###BA", "AB#D#BA", "AB###BA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "ABC#CBA", "AB#D#BA", "ABC#CBA", "#ABBBA#", "##AAA##")
            .aisle("##AAA##", "#ABBBA#", "AB###BA", "AB#D#BA", "AB###BA", "#ABBBA#", "##AAA##")
            .aisle("A#AAA#A", "AABBBAA", "ABC#CBA", "AB#D#BA", "ABC#CBA", "#ABBBA#", "##AAA##")
            .aisle("#######", "##AAA##", "#ABBBA#", "#ABBBA#", "#ABBBA#", "##AAA##", "###A###")
            .aisle("##A#A##", "##A#A##", "##AAA##", "##A@A##", "##AAA##", "###A###", "#######")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("B", Predicates.blocks("gtceu:cerrobase_140_block"))
            .where("C", Predicates.blocks("gtceu:uv_world_accelerator"))
            .where("D", Predicates.blocks("gtceu:neutronium_block"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})