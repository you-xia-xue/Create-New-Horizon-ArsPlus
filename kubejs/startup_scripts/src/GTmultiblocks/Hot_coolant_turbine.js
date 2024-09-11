const LargeTurbineMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine')
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hot_coolant_turbine')
        .category('ctnh')
        .setMaxIOSize(0, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
//GTMachines.registerLargeTurbine('hot_coolant_turbine',GTValues.EV,'hot_coolant_turbine',GTBlocks.CASING_TITANIUM_SOLID,GTBlocks.CASING_TITANIUM_GEARBOX,'gtceu:block/casings/solid/machine_casing_solid_titanium',  'gtceu:block/multiblock/generator/large_steam_turbine')
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hot_coolant_turbine', 'multiblock', holder => new LargeTurbineMachine(holder, GTValues.EV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hot_coolant_turbine')
        .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.CASING_TITANIUM_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA")
            .aisle("ASSA", "BCCB", "ASSA")
            .aisle("AAAA", "A@SA", "AAAA")
            .where("A", Predicates.blocks(GTBlocks.CASING_TITANIUM_TURBINE.get()))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_TITANIUM_GEARBOX.get()))
            .where('S', Predicates.blocks(GTBlocks.CASING_TITANIUM_TURBINE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMinGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/mechanic/machine_casing_turbine_titanium', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
