const couponsData=[
    {
        offerName:"off300",
        minBillAmount:1000,
        reductionFunction:num =>num-300,
        offerStatus:false,
        description:"Get Rs.300 off on minimum purchase of Rs.1000",
    },
    {
        offerName:"off500",
        minBillAmount:1500,
        reductionFunction:num =>num-500,
        offerStatus:false,
        description:"Get Rs.500 off on minimum purchase of Rs.1500",
    },
    {
        offerName:"off20%",
        minBillAmount:2000,
        reductionFunction:num =>num/2,
        offerStatus:false,
        description:"Get 50%off off on minimum purchase of Rs.2000",
    },

]
export {couponsData}