import axios from 'axios' //cliente HTTP

const BASE_URL = 'http://localhost:3003/api'
const curYear = new Date().getFullYear()

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}