/// <reference types = "Cypress" />

import {faker} from '@faker-js/faker';

describe('PetStore Scenarios', () => {
    var petId , petName
    var fakePetName = faker.name.firstName()
    var fakePetId = faker.random.numeric(2)

    it('Add a pet', () => {
  
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet', // baseUrl is prepend to URL
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'special-key',
          'accept': 'application/json'
        },
        body: {
          "id": `${fakePetId}`,
          "category": {
            "id": `${fakePetId}`,
            "name": `${fakePetName}`
          },
          "name": `${fakePetName}`,
          "photoUrls": [
            "https:"
          ],
          "tags": [
            {
              "id": `${fakePetId}`,
              "name": `${fakePetName}`
            }
          ],
          "status": "available"
        },
      }).then((response) => {
        console.log(response.body)
        expect(response.status).eq(200)
        petId = response.body.id
        petName = response.body.category.name
        cy.log(petId)
        cy.log(petName)
        expect(response.body.id).to.be.not.null
        expect(response.body.name).to.be.not.empty
      })
  
    })
  
    it('Get a pet by Id', () => {
  
      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${petId}`, // baseUrl is prepend to URL
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'special-key',
          'accept': 'application/json'
        },
        body: {},
      }).then((response) => {
        console.log(response.body)
        expect(response.status).eq(200)
        expect(response.body.id).to.be.eq(petId)
        expect(response.body.id).to.be.not.null
        expect(response.body.name).to.be.not.empty
      })
  
    })
  
    it('Update pet pet name', () => {
  
      cy.request({
        method: 'PUT',
        url: `https://petstore.swagger.io/v2/pet`, // baseUrl is prepend to URL
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'special-key',
          'accept': 'application/json'
        },
        body: {
          "id": `${petId}`,
          "category": {
            "id": 0,
            "name": "Updatedname"
          },
          "name": "Updatedname",
          "photoUrls": [
            "https:"
          ],
          "tags": [
            {
              "id": `${petId}`,
              "name": "Updatedname"
            }
          ],
          "status": "available"
        },
      }).then((response) => {
        console.log(response.body)
        expect(response.status).eq(200)
        expect(response.body.id).to.be.eq(petId)
        expect(response.body.id).to.be.not.null
        expect(response.body.name).to.be.not.empty
        expect(response.body.name).to.be.not.contain(fakePetName)
      })
  
    })
  
    it('Delete a pet by Id', () => {
      cy.request({
        method: 'DELETE',
        url: `https://petstore.swagger.io/v2/pet/${petId}`, // baseUrl is prepend to URL
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'special-key',
          'accept': 'application/json'
        },
        body: {},
      }).then((response) => {
        console.log(response.body)
        expect(response.status).eq(200)
        expect(response.body.message).to.be.contain(petId)
        expect(response.body.code).to.be.eq(200)
      })
  
    })
  
  })