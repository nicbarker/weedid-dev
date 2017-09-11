//
//  WeedIdUITests.swift
//  WeedIdUITests
//
//  Created by Nic Barker on 19/11/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import XCTest

class WeedIdUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()
        // Put setup code here. This method is called before the invocation of each test method in the class.
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.

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
        app.otherElements["flower"].tap()
        snapshot("02FlowerScreen")
        app.otherElements["plant-detail-4"].swipeUp()
        app.otherElements["plant-detail-10"].tap()
        snapshot("03DetailScreen")
        app.otherElements["plant-10-image-mature"].tap()
        snapshot("04ImageView")
    }
  
}
