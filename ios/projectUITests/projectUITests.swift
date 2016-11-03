//
//  projectUITests.swift
//  projectUITests
//
//  Created by Nic Barker on 1/11/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import XCTest

class projectUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
      
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
      super.tearDown()
  }
    
    func testExample() {
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        let app = XCUIApplication()
        sleep(5)
        snapshot("01MainScreen")
        app.otherElements["  Seed  Seedling  Flower  Mature"].otherElements[" Flower"].tap()
        
        let element = app.otherElements["               "]
        element.children(matching: .other).matching(identifier: "  ").element(boundBy: 4).children(matching: .other).element(boundBy: 1).tap()
        snapshot("02FlowerScreen")
        app.otherElements["        Scientific Name Ipomoea aquatica Common Name Swamp morning-glory Khmer Name Trakoeun (ត្រកួន) Family Name Convolvulaceae Plant Type Broadleaf Description / Characteristics I. aquatica is a sprawling vine, annual or perennial, creeping on mud or floating on water; stems: teeter, branched, hollow and succulent when floating, otherwise solid and firm, up to 3 m long, to 1 cm in diameter. Habitat I. aquatica occurs in moist, marshy, or inundated localities, in shallow pools, ditches, or wet ricefields, from sea level to 1000 m. It forms dense masses and is easily propagated from cuttings. It is also cultivated as a vegetable in different parts of Asia. Control Methods Hand weeding; (For culinary use as vegetable) Reference https://plants.ifas.ufl.edu/plant-directory/ipomoea-aquatica/ https://worldcrops.org/crops/water-spinach Image Copyright Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com"].otherElements["    "].children(matching: .other).element(boundBy: 2).tap()
        snapshot("03DetailScreen")
  }
  
}
