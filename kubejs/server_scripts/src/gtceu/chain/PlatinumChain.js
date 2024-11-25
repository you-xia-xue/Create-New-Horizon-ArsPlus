ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:large_chemical_reactor/platinum_group_sludge_tiny_dust1' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_pentlandite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/platinum_group_sludge_dust1_lv' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_chalcopyrite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_chalcocite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_tetrahedrite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_bornite' })
    event.remove({ id: 'gtceu:chemical_reactor/platinum_group_sludge_tiny_dust1' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_pentlandite' })
    event.remove({ id: 'gtceu:chemical_reactor/platinum_group_sludge_dust1_lv' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_chalcopyrite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_chalcocite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_tetrahedrite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_bornite' })

    event.recipes.gtceu.mana_seperator('platinum_catalyst')
    .itemInputs('20x gtceu:platinum_metal_dust')
    .notConsumable('kubejs:platinum_metal_catalyst')
    .itemOutputs('6x gtceu:iridium_dioxide_dust')
    .outputFluids(Fluid.of('gtceu:acidic_osmium_solution',6000))
    .itemOutputs('15x gtceu:palladium_dust')
    .itemOutputs('20x gtceu:platinum_dust')
    .itemOutputs('14x gtceu:ruthenium_dust')
    .itemOutputs('60x gtceu:reprecipitated_rhodium_dust')
    .EUt(480)
    .duration(600)
    .circuit(0)

    event.recipes.gtceu.mana_seperator('platinum_catalyst1')
    .itemInputs('20x gtceu:platinum_metal_dust')
    .notConsumable('kubejs:platinum_metal_catalyst')
    .itemOutputs('6x gtceu:iridium_dust')
    .itemOutputs('2x gtceu:osmium_dust')
    .itemOutputs('15x gtceu:palladium_dust')
    .itemOutputs('20x gtceu:platinum_dust')
    .itemOutputs('14x gtceu:ruthenium_dust')
    .itemOutputs('4x gtceu:rhodium_dust')
    .EUt(1920)
    .duration(600)
    .circuit(1)
})