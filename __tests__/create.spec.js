const dataTest = require("./create.data.json")
const Lips = require("../src/lips")
const lips = new Lips()

describe("Create function", () => {
    test("It should create a 250x230 jpeg image", () => {
        const args = {
            w: 250,
            h: 230
        }
        const output = {
            data: dataTest.jpeg_250_230, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 300x300 jpeg image with golden background", () => {
        const args = {
            w: 300,
            bc: 'gold'
        }
        const output = {
            data: dataTest.jpeg_300_300_bcGold, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 300x250 jpeg image with indigo background and white text", () => {
        const args = {
            w: 300,
            h: 250,
            bc: 'indigo',
            tc: 'white'
        }
        const output = {
            data: dataTest.jpeg_300_250_bcIndigo_tcWhite, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 400x400 png image with black background and purple text", () => {
        const args = {
            w: 400,
            bc: 'black',
            tc: 'purple',
            t: 'png'
        }
        const output = {
            data: dataTest.png_400_400_bcBlack_tcPurple, 
            type: 'image/png',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 365x365 webp image with #45d36d background color", () => {
        const args = {
            w: 365,
            bc: '45d36d',
            t: 'webp'
        }
        const output = {
            data: dataTest.webp_365_365_bc45d36d, 
            type: 'image/webp',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 450x300 jpeg image with coral background color and lime text color, 0.1 low quality", () => {
        const args = {
            w: 450,
            h: 300,
            bc: 'coral',
            tc: 'lime',
            q: 0.1
        }
        const output = {
            data: dataTest.jpeg_450_300_bcCoral_tcLime_q01, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 200x200 jpeg with default colors at highest quality (1)", () => {
        const args = {
            q: 1
        }
        const output = {
            data: dataTest.jpeg_200_200_q1, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 200x200 png with defaults", () => {
        const args = {
            t: 'png'
        }
        const output = {
            data: dataTest.png_200_200, 
            type: 'image/png',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 200x200 webp with defaults", () => {
        const args = {
            t: 'webp'
        }
        const output = {
            data: dataTest.webp_200_200, 
            type: 'image/webp',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 200x200 jpg with defaults", () => {
        const args = {}
        const output = {
            data: dataTest.jpeg_200_200, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
    test("It should create a 200x200 jpg with mid/low quality (2.3)", () => {
        const args = {
            q: 2.3
        }
        const output = {
            data: dataTest.jpeg_200_200_q23, 
            type: 'image/jpeg',
            status: true,
            error: ''
        }
        expect(lips.create(args, false)).toEqual(output)
    })
})