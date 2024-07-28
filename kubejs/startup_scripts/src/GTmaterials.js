const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("andesitealloy")
    .ingot()
    .fluid()
    .color(0xA7AD9F).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("energetic_alloy")
    .ingot()
    .fluid()
    .cableProperties(GTValues.V[GTValues.MV], 1, 0, true)
    .color(0xF7CC69).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create("vibrant_alloy")
    .ingot()
    .fluid()
    .cableProperties(GTValues.V[GTValues.HV], 1, 0, true)
    .color(0xE6FB76).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("conductive_alloy")
    .ingot()
    .fluid()
    .cableProperties(GTValues.V[GTValues.LV], 1, 0, true)
    .color(0xDAB0AA).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("dark_steel")
    .ingot()
    .fluid()
    .color(0x858585).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("solarium")
    .ingot()
    .fluid()
    .color(0x6C5A34).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("end_steel")
    .ingot()
    .fluid()
    .cableProperties(GTValues.V[GTValues.EV], 1, 0, true)
    .color(0xCDC77C).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("copper_alloy")
    .ingot()
    .fluid()
    .color(0xBB8418).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("pulsating_alloy")
    .ingot()
    .fluid()
    .color(0x9AEBAD).iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR)
    event.create("precious_alloy")
    .ingot()
    .ore()
    //.components('1x gold')
    .fluid()
    .color(0xA4801F).iconSet(GTMaterialIconSet.METALLIC)
    event.create("gold_alloy")
    .ingot()
    .color(0xA69226).iconSet(GTMaterialIconSet.METALLIC)
    event.create("cryolite")
    .dust()
    .ore()
    //.components('3x sodium','1x aluminum','6x fluorine')
    .color(0x8D8686)
    event.create('sodium_hexafluoroaluminate')
    .fluid()
    //.components('3x sodium','1x aluminum','6x fluorine')
    .color(0x75471F)
    event.create("gold_leach")
    .dust()
    .color(0x695D18)
    event.create("copper_leach")
    .dust()
    .color(0x70552D)
    event.create('chloroauric_acid')
    .fluid()
    .color(0xBAB02D)
    event.create('potassium_metabi_sulfite')
    .dust()
    .color(0x8D6939)
    //.components('2x sulfur','2x potassium','2x oxygen')
    event.create('alumina')
    .dust()
    .color(0x09474A)
    //.components('2x aluminum','3x oxygen')
    event.create('sodium_fluoride')
    .dust()
    .color(0x480214)
    //.components('1x sodium','1x fluorine')
    event.create('aluminium_trifluoride')
    .dust()
    .color(0x9B513E)
    //.components('1x aluminum','3x fluorine')
    event.create('sodium_hydroxide_bauxite')
    .fluid()
    .color(0xA46D2C)
    event.create('impure_aluminium_hydroxide_solution')
    .fluid()
    .color(0xC95D3A)
    event.create('pure_aluminium_hydroxide_solution')
    .fluid()
    .color(0x803DC2)
    event.create('red_mud')
    .fluid()
    .color(0xB2370D)
    event.create('neutralised_red_mud')
    .fluid()
    .color(0xAF3C15)
    event.create('red_slurry')
    .fluid()
    .color(0xAC401C)
    event.create('titanyl_sulfate')
    .fluid()
    .color(0xCC3C75)
    event.create('ferric_ree_chloride')
    .fluid()
    .color(0x3B3B2B)
    event.create('aluminium_hydroxide')
    .dust()
    .color(0x5E929D)
    event.create('sodium_hydroxide_solution')
    .fluid()
    .color(0x15286D)
    event.create('rare_earth_chloride_solution')
    .fluid()
    .color(0x393927)
    event.create('manasteel')
    .ingot()
    .color(0x438FFE)
    .secondaryColor(0x3962D7)
    .iconSet(GTMaterialIconSet.METALLIC)
    .cableProperties(GTValues.V[GTValues.LV],6,1,false)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create('terrasteel')
    .ingot()
    .color(0x63D12F)
    .secondaryColor(0x2AB73A)
    .iconSet(GTMaterialIconSet.METALLIC)
    .cableProperties(GTValues.V[GTValues.HV],6,1,false)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create('elementium')
    .ingot()
    .color(0xFF6CD3)
    .secondaryColor(0xDD82A3)
    .iconSet(GTMaterialIconSet.METALLIC)
    .cableProperties(GTValues.V[GTValues.MV],6,1,false)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create('alfsteel')
    .ingot()
    .color(0xFD9D31)
    .iconSet(GTMaterialIconSet.METALLIC)
    .cableProperties(GTValues.V[GTValues.EV],6,1,false)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create("mana_fused")
    .dust()
    .ore()
    .color(0x4FC1FF)
    event.create('iodine_enriched_solution')
    .fluid()
    .color(0x804E9B)
    event.create('netherite')
    .ingot()
    .color(0x595659)
    .secondaryColor(0x4C484C)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create('unknown_mixture')
    .fluid()
    .color(0x979ea9)
    event.create('normal_yeast')
    .dust()
    .color(0xe3d7b7)
    event.create('normal_yeast_seed_liquid')
    .fluid()
    .color(0xe3d7b7)
    event.create('normal_yeast_liquid')
    .fluid()
    .color(0xD6C493)
    event.create('normal_yeast_extract_liquid')
    .fluid()
    .color(0xe3bb4f)
    event.create('crimson_yeast')
    .dust()
    .color(0xe58877)
    event.create('crimson_yeast_seed_liquid')
    .fluid()
    .color(0xe58877)
    event.create('crimson_yeast_liquid')
    .fluid()
    .color(0xe66f5a)
    event.create('crimson_yeast_extract_liquid')
    .fluid()
    .color(0xd85841)
    event.create('wraped_yeast')
    .dust()
    .color(0x6abbba)
    event.create('wraped_yeast_seed_liquid')
    .fluid()
    .color(0x6abbba)
    event.create('wraped_yeast_liquid')
    .fluid()
    .color(0x3a9795)
    event.create('wraped_yeast_extract_liquid')
    .fluid()
    .color(0x23807e)
    event.create('end_yeast')
    .dust()
    .color(0x8ef2eb)
    event.create('end_yeast_seed_liquid')
    .fluid()
    .color(0x8ef2eb)
    event.create('end_yeast_liquid')
    .fluid()
    .color(0x63f1e7)
    event.create('end_yeast_extract_liquid')
    .fluid()
    .color(0x3dc7bd)
    event.create('fluorescence_yeast')
    .dust()
    .color(0xe8f090)
    event.create('fluorescence_yeast_seed_liquid')
    .fluid()
    .color(0xe8f090)
    event.create('fluorescence_yeast_liquid')
    .fluid()
    .color(0xe5f163)
    event.create('fluorescence_yeast_extract_liquid')
    .fluid()
    .color(0xc7d24d)
    event.create('light_yeast')
    .dust()
    .color(0xc0e191)
    event.create('light_yeast_seed_liquid')
    .fluid()
    .color(0xc0e191)
    event.create('light_yeast_liquid')
    .fluid()
    .color(0xaae15b)
    event.create('light_yeast_extract_liquid')
    .fluid()
    .color(0x87bf38)
    event.create('waste_nutrition_liquid')
    .fluid()
    .color(0xf4db96)
    event.create('cellulose')
    .dust()
    .color(0xeee3bf)
    event.create('lignin')
    .dust()
    .color(0xb89320)
    event.create('lyase')
    .dust()
    .color(0xe4c86f)
    event.create('amino_acid')
    .fluid()
    .color(0xf4de5a)
    /*event.create('germanium')
    .ingot()
    .components('1x germanium')
    .color(0x434343)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_RING)
    event.create('selenium')
    .dust()
    .components('1x selenium')
    .color(0xbbbc12)
    event.create('tellurium')
    .ingot()
    .components('1x tellurium')
    .iconSet(GTMaterialIconSet.METALLIC)
    .color(0xFFFFFF)
    .flags(GTMaterialFlags.GENERATE_PLATE)*/
    event.create('blue_vitriol_solution')
    .fluid()
    .color(0x48A5C0)
    event.create('chalcogen_anode_mud')
    .dust()
    .color(0x247a93)
    event.create('sodium_tellurite')
    .dust()
    .color(0x47d2e7)
    event.create('selenium_dioxide')
    .dust()
    .color(0xe4f437)
    event.create('tellurium_dioxide')
    .dust()
    .color(0xcbcd22)
    event.create('selenous_acid')
    .fluid()
    .color(0x8d1152)
    event.create('ammonium_sulfate')
    .fluid()
    .color(0x2759e7)
    event.create('ammonium_carbonate')
    .dust()
    .color(0x2654d8)
    event.create('potassium_bisulfite')
    .dust()
    .color(0xb0afa5)
    .components("1x potassium", "1x sulfur", "1x hydrogen", "3x oxygen")
    event.create('potassium_nitrite')
    .dust()
    .color(0xc5c3b2)
    event.create('nitrous_acid')
    .fluid()
    .color(0xe2deb2)
    .components("1x hydrogen", "1x nitrogen", "2x oxygen")
    event.create('sodium_acetate')
    .fluid()
    .color(0x80e566)
    event.create('potassium_hydroxylamine_disulfonate')
    .dust()
    .color(0x3f7a30)
    .components("2x potassium", "1x nitrogen", "1x hydrogen", "2x sulfur", "7x oxygen")
    event.create('hydroxylammonium_sulfate')
    .dust()
    .color(0xa0a591)
    .components("2x nitrogen", "8x hydrogen", "1x sulfur", "6x oxygen")
    event.create('barium_chloride')
    .dust()
    .color(0xd26d4f)
    .components('1x barium','2x chlorine')
    event.create('barium_sulfate_solution')
    .fluid()
    .color(0xa7c6e6)
    event.create('hydroxylamine_hydrochloride')
    .fluid()
    .color(0xe33333)
    event.create('succinic_acid')
    .dust()
    .color(0x0f6f6d)
    event.create('succinic_anhydride')
    .dust()
    .color(0x634010)
    event.create('acetylene')
    .gas()
    .color(0x8eb256)
    .components("2x carbon", "2x hydrogen")
    event.create('tetrahydrofuran')
    .fluid()
    .color(0x8fe5bc)
    event.create('nhydroxy_succinimide')
    .dust()
    .color(0x997db2)
    event.create('triethylamine')
    .fluid()
    .color(0x52686a)
    event.create('succinimidyl_acetate')
    .dust()
    .color(0x855c75)
    event.create('glyoxal')
    .fluid()
    .color(0xf0ed4d)
    .components("2x carbon", "2x hydrogen", "2x oxygen")
    event.create('ammonium_acetate')
    .dust()
    .color(0x73a3a7)
    event.create('acetamide')
    .dust()
    .color(0x638e92)
    event.create('acetonitrile')
    .dust()
    .color(0x889fb5)
    event.create('benzyl_chloride')
    .fluid()
    .color(0x85e7e7)
    .components("7x carbon", "7x hydrogen", "1x chlorine")
    event.create('hexamethylenetetramine')
    .dust()
    .color(0x5a6261)
    .components("6x carbon", "12x hydrogen", "4x nitrogen")
    event.create('benzylamine')
    .fluid()
    .color(0x5b6363)
    .components("7x carbon", "9x hydrogen", "1x nitrogen")
    event.create('hexabenzylhexaazaisowurtzitane')
    .dust()
    .color(0x4a2367)
    .components("48x carbon", "48x hydrogen", "6x nitrogen")
    event.create('palladium_chloride')
    .dust()
    .color(0xcfcfcf)
    .components('1x palladium','2x chlorine')
    event.create('palladium_on_carbon')
    .dust()
    .color(0x681f3a)
    event.create("dibenzyl_tetraacetylhexaazaisowurtzitane")
    .dust()
    .color(0x8ea268)
    .components("28x carbon", "32x hydrogen", "6x nitrogen", "4x oxygen")
    event.create('succinimide')
    .dust()
    .color(0x21a7c5)
    event.create("boron_fluoride")
    .fluid()
    .components("1x boron", "3x fluorine")
    .color(0xcecad0)
    event.create('nitronium_tetrafluoroborate')
    .dust()
    .color(0x3c3f40)
    .components("1x nitrogen", "2x oxygen", "1x boron", "4x fluorine")
    event.create('nitrosonium_tetrafluoroborate')
    .dust()
    .color(0x485054)
    .components("1x nitrogen", "1x oxygen", "1x boron", "4x fluorine")
    event.create('tetraacetyldinitrosohexaazaisowurtzitane')
    .dust()
    .color(0x500449)
    event.create('tetrafluoroboric_acid')
    .fluid()
    .color(0x7c8915)
    event.create('benzaldehyde')
    .fluid()
    .color(0x905a1b)
    .components("7x carbon", "6x hydrogen", "1x oxygen")
    event.create('crude_hexanitro_hexaazaisowurtzitane')
    .dust()
    .color(0x19586d)
    event.create('ethylenediamine')
    .fluid()
    .color(0x1b5d74)
    .components("2x carbon", "8x hydrogen", "2x nitrogen")
    event.create('silica_gel')
    .dust()
    .color(0x57c3e4)
    event.create('hexanitro_hexaazaisowurtzitane')
    .dust()
    .color(0x3d464b)
    event.create('boric_acid')
    .fluid()
    .color(0x8fbc8f)
    event.create('dimethylformamide')
    .dust()
    .color(0x34f4a5)
    event.create('acetaldehyde')
    .fluid()
    .color(0xf9954a)
    event.create('sodium_periodate')
    .dust()
    .color(0x1438bb)
    .components('1x sodium','1x iodide','4x oxygen')
    .iconSet(GTMaterialIconSet.METALLIC)
    event.create('calcium_carbide')
    .dust()
    .color(0x3e4133)
})
StartupEvents.postInit(event =>{
    GTMaterials.get('cryolite').setFormula('Na3AlF6')
    GTMaterials.get('sodium_hexafluoroaluminate').setFormula('Na3AlF6')
    GTMaterials.get('precious_alloy').setFormula('Au?')
    GTMaterials.get('potassium_metabi_sulfite').setFormula('K2S2O2')
    GTMaterials.get('alumina').setFormula('Al2O3')
    GTMaterials.get('sodium_fluoride').setFormula('NaF')
    GTMaterials.get('aluminium_trifluoride').setFormula('AlF3')
    GTMaterials.get('sodium_hydroxide_bauxite').setFormula('(TiO2)Al2H10O29-Na(OH)2')
    GTMaterials.get('gold_leach').setFormula('(Au)')
    GTMaterials.get('copper_leach').setFormula('(Cu)')
    GTMaterials.get('chloroauric_acid').setFormula('AuCl3')
    GTMaterials.get('impure_aluminium_hydroxide_solution').setFormula('(Al(OH)3)')
    GTMaterials.get('pure_aluminium_hydroxide_solution').setFormula('Al(OH)3')
    GTMaterials.get('red_mud').setFormula('Ti?Fe?')
    GTMaterials.get('neutralised_red_mud').setFormula('Ti?Fe?')
    GTMaterials.get('red_slurry').setFormula('Ti?')
    GTMaterials.get('titanyl_sulfate').setFormula('TiO(SO4)')
    GTMaterials.get('ferric_ree_chloride').setFormula('(FeCl3)')
    GTMaterials.get('aluminium_hydroxide').setFormula('Al(OH)3')
    GTMaterials.get('sodium_hydroxide_solution').setFormula('NaOH')
    GTMaterials.get('precious_alloy').setFormula('Au?')
    GTMaterials.get('precious_alloy').setFormula('Au?')
    GTMaterials.get('precious_alloy').setFormula('Au?')
    GTMaterials.get('andesitealloy').setFormula('(Mg3Si2H4O9)4(KNO3)Fe')
    GTMaterials.get('cellulose').setFormula('(C6H10O5)n')
    GTMaterials.get('lignin').setFormula('(CH2ON?S?)n')
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty")
    const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
    const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
    function radioactive(multiplier) {
        return new HazardProperty(HazardProperty.HazardTrigger.ANY,
            GTMedicalConditions.CARCINOGEN, multiplier, true)
    }
    /*event.create('germanium', 32, 40, -1, null, 'Ge', false) // 
    event.create('selenium',34,46,-1,null,'Se',false)
    event.create('tellurium',52,74,-1,null,'Te',false)*/
    GTMaterials.NaquadahAlloy.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.TitaniumTungstenCarbide.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Trinium.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Europium.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Sodium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Seaborgium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Seaborgium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Seaborgium.addFlags(GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Dubnium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Dubnium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Dubnium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Dubnium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Rhenium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Rhenium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Calcium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Calcium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Praseodymium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Gadolinium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Terbium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Dysprosium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Dysprosium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Holmium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Erbium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Thulium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Thulium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Ytterbium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Scandium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Scandium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.NaquadahEnriched.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.NickelZincFerrite.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Promethium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Polonium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Polonium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Hafnium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.EnderEye.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.EnderPearl.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Protactinium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Protactinium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Protactinium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Neptunium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Neptunium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Neptunium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Curium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Curium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Curium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Berkelium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Berkelium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Einsteinium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Einsteinium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Einsteinium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Californium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Californium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Californium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Fermium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Fermium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Fermium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Mendelevium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Mendelevium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Mendelevium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Oganesson.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Oganesson.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Oganesson.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Oganesson.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Flerovium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Flerovium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Nobelium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Nobelium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Lawrencium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lawrencium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Nobelium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Lawrencium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Hassium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Hassium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Hassium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Hassium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Rubidium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Rubidium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Technetium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Technetium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Technetium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Francium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Francium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Strontium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Radium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Radium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Radium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Actinium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Actinium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Actinium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Rutherfordium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Rutherfordium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Selenium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Astatine.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Astatine.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Astatine.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Bohrium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Bohrium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Bohrium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Thallium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Thallium.setProperty(PropertyKey.HAZARD, new HazardProperty(HazardProperty.HazardTrigger.INHALATION, GTMedicalConditions.POISON, 1, false))
    GTMaterials.Meitnerium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Meitnerium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Meitnerium.setProperty(PropertyKey.HAZARD, radioactive(1))
    GTMaterials.Roentgenium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Copernicium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Moscovium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Livermorium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Tennessine.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Roentgenium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Copernicium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Nihonium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Moscovium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Livermorium.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Tennessine.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Roentgenium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Copernicium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Nihonium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Moscovium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Livermorium.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.Tennessine.setProperty(PropertyKey.HAZARD, radioactive(1.5))
    GTMaterials.ReinforcedEpoxyResin.addFlags(GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Phosphorus.setProperty(PropertyKey.FLUID, new $FluidProperty())
    //GTMaterials.get('cryolite').getProperty(PropertyKey.ORE).setOreByProducts([GTMaterials.Sodium, GTMaterials.BlueTopaz])
 })