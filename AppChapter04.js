import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav items
 *  -Cart
 * Body
 *  -Search bar
 *  -Reataurant card list
 *    -Restuarant card
 *      -Image
 *      -Name
 *      -Rating
 *      -Cusines
 * Footer
 * -links
 * -copurihtd
 */
const title = (
  <div>
    <a href="/">
      <img
        className="logo"
        alt="Logo"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVBxgTExUYGBgYHBsbHBsbGxsaIhwiGhscGR8bIxkbIi0kGyMqHxobJjklKi8xNDU3HSg6PzozPjszNDEBCwsLEA8QHxISHDUqISo+NTc5Mzk+OTYzMTM8MTU1NTwzNzU+NjMzOTEzMzMzPjUzMzwzMzMzPDMzMzMxMzMxM//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgIDCAH/xABJEAACAgEDAgMFBAQJCAsAAAABAgADEQQSIQUxBhNBByJRYXEUMoGRFUJSoSMkM2JykpOisUNTY4KDssHRFiY0NTdEc7PC0+H/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAsEQEBAAICAAUBBgcAAAAAAAAAAQIRAyEEBRIxQWETFCIyUaEjQoGRscHh/9oADAMBAAIRAxEAPwCr4iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiCeICJ8UgjifYCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICfGbCE/AT7MzR9O8yhrLHFdKnaztzyRnYiDl3xztHA7kgSLdCTfotb6q/T0C1rtOSMsybLNli1OQoUGsAsWBLsMKc4nVQVpvFelHn6k8eYql1Q/CpSPeb/AEjDAx7o9Zz03Trtd1a+2kGuux7Hd2OFRXcvtYjhjgj3fkDwOZkaw6WqhqatUEVhh2rRrrLPk1gKIifzEYj4lpnvvS31YursZrRX1BXV8ZS4p74HpvX/ACyfMe8PQntI3XaF6XAfBDDKOp3K4/aVuzD949QJL6B9N5Pkvqd9ROQltTVbCf167Uazy2+ORtP6wPedus0Fmk0+7C6jR2HPcFcngHchPlv6B1JB+f3Q9WrpOttaiSGr0C+QbaGL1DG4NgPXngB1HBBPAdfdPyPEj5pLKoRESQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgbP1rTV26VnpqRNqLfX5ahd1TfwdlbbeGeqwcsedu4mR3SLEs2aWylrSbN1e2zyzusCq6sSje4QqkkYYbTg/CU8HXIyOlrBFoV7UdgSqh6zTYjY/VYtW231KkdzIm3qKVVGrRgopBVrWA82wEYIz/kkP7C8/EmZTfslkeIutm0DT1YXTV8KqDarkHlyv7JPKg54wTlsmdOm6JuFYN1a2XLurrIsJIYsq5dUKLuIPc/XEiQOJunTb6RbpKnr3alq0NdvIFe4uyAoHAfYfUjmTl+GdJnd7a/qOjbBYBdWz1KWsrXzMqFIVsMyBG2lhnDfHGY6F1mzTXnGWrfixOMMDwSA3G7HqeD2ORJzql+nZ9ZXXWU1Co/mW5JWwLYnmAIXITcec/85p8T8WOqXq9Jzq1lVVlldVW02ovvh8oa3K2BkrK5XdtXILNtwQJOeDekUNo2OoVHe0ZVGwWCAkBwPvLuZW94fBOeZquk6oy0+VYouqH+Tcn3M+qOPerP04+IMm9Z9kHTdPqAbrChFY2EVspUs6JY2CFIXADLgsNxHaZ8mNuPpls38rY2b2wfFnTKtP1MV0sxBUMysc7MkgDd65AJ55xjk5kJO7Wap7dW9tmNzsWOOw9AB8gAAPkJ0zXCWYyW7qmVlvRERLoIiICIiAiIgIiICIiAiIgIiICc662Z8KrMe+FBY8dzgThJbw71Q6fWOdxQWVvWXUZavfjFijudrAHA5xnHOJGVsnREZp6WsuVK1Ls5wqqMkk/ASTr8PX/bjVYvlbE32M5G2tP2yykg5wQAOSfxxvvhrw2ulpN1ZGqtdcIy4VFU+u/J4PGSMtjgL3zj+KrKdP0G2q11s1OowW+O7I2tt/URAvug/D1JM5rz25emRpMet1q3T0oFFtVbHUh9rlCG07N5O9sowL7wA7EowBO0EciZP2rRNrV02lqRa7qyjWWKxdLHDBDvcnCh9mdoUd+SJh+F7qKLjq7bQXQN5dKhizMylckkbQuCfU9+cYwddYfwJHyx+6aybtV9o7bEZXKuCrKSrA9wVOCD8wQRJnpus1H6PYfa/JqTamWBY5s3kIhRGccK54IAxPvU6dNb1O20a2sCyx3ANWoyA7lgDivGQDMbUiqvpLVpetrPbU2FS1cLWl6kkuijvYvAl73EMjqms1B0C/xoXVOShKqQSa9jFH3orHhkPJIPrIQniSml8p+kit71qZbbH95LHyrpUoIKIwHKN3nE6DT7f+21/wBlqf8A64nUL2k6rqqradJqa0ZAha4lCWR7NzKodffTaprU4z68HE62ak9Pt8tGood1Te7Naz7GNihKsLhsYJLPgBsZyZEdUvWzq11icq9tjqcEZDOzA4PI4I7yW099FvhddPZYKraXd0LhirrZyykoCVbOPT9UfPFLNdp2wtT0ofY/Oos85NwRvcKPWzcKGTLcN2DAkE8TH6h026hwt1bIWGRnHP0IJH4dxxNg8C6zTK91Gp2gXqqhm4UgbsoSfu53Ag/EfHE23V9Fa3QfZdTudQc1Xrywxwu9e+4A4JGVYd9pmOXPcMtWdf6+i8w3NxVJrbZuwdpOA2DgnvjPbPynGbB1ez7P006BbVuHmb2Zfu14BGxeT7xJLN6Dt3Jmvzpxu5tnZoiIlkEREBERAREQEREBERAREQEmPDnhrU67UsmmRTsALuzYVc5xk4JycHAAPYyHlx+wz/u7Vf8Aqp/uQNdq9lfVEB2W0LnvtusXP1xXzI/qns11+n6e97+QVrVnfY7E4UZY4ZBngE9/SWl7UOsX6Twz52ms8t/MRd2Fbg5yMOCPT4SnNd426ldo3qt1RZHUq6+XUuVPBGVQEZHHBjQ1+bb0v2c9Sv04cVLWpGR5rbGP+qAzL/rATafY/wCFkZD1C1Q2GK0g84K8NZ9c5UfDaT8Mbj7RPFX2Do4asKbrG2Vhuw4yzkeoUY4+JECjeveHNVo7ANTUUDcK4IZGPfAZeM/I4PykVLt8GeJk6t0y3Ra6tDYEy20YDrkDeozlXVtvbsSpHwFRde6U+k6xbpnOTW2A37SkBkb8VIP5wMKmpntCIrOzHCqoLMx+AUck/ITcNN7MOpvRuNdafzHsAb8lDKPxM3/2UeFUo6SursUG65dyk/qVsMqo+BYYYn5gek5e0vxu+hNdGmCG6wb2LDcEQHA93IyWIIHyU/KBTHVelX6XVeVqa2rbuA2CGHxVhlWHzBMx9Lpns1K11qXd2Cqo7kngD/8ATwJdvT9XV13wi9diql6cHHPl2YOyxc87W5yP6S895W3s9qZPaDp0cYZLLVYfBlrsUj8CDAytX7MepV6M2bKnwMlK3LP8wFKgMR8AT8sznovZt1R9Fnatakfyb2lSc/FEDKPoSPnL/J4nnbXe0bqFnVWvqvauvcTXWApULngMCPfJHck9ycY4wED1fo9+k1Xlaitq27gHGGA4yrD3WH0PEwZflS1db8DZdQthDAHH8nanG4eu0nBx6q2JQZUhiGGCCQQfQg4I/AwEREBERAREQEREBERAREQEldDoV/Rj6iwZA31oOcbhXu3HHpkoB6ZPPzwNFUH11dZzh7EQ474Zwpx88GbDoNA50b02HNVdjs2OPMLCoIm4cqpZWY/ApjIPIrlUxrEuH2GH+Jaof6Sv/cb/AJSo9VYralmQAKSdoA2gL2Xj04xn55lteww/xbVD+fWfzV/+UshvPi3oNWt6T5F1jIm9X3KVByucDLAj1lFeO+gU6HrC002tarVhyWKllJZlwSgAxhQRxLS9tY/6l/7av/5SiAgC4AxA9O+D9IKvC2lQelNefqyhmP4sSfxlTe2zUs3imqr9WukMP6Tu+4/kiflLc8KapbPDOmsXs1NZ+nuAEfgQR+EqD201EeL0YjhqEwf6L2Aj94/OBDezjUmvxtpiP1mZD8w6MMfntP4TYfbD08N4y04HBvrSs/XzSgP5OPykH7MdA1vjWgqOK99rn4BVIH99kH4ya9rPU1Hjug9xpkqZ/r5nmEfXYFP4wLtqQLWFUYAAAHwA4E86e0rUmzxzqSTkIURfkERcj+sWP4z0YjArkHIM83e0KnZ441YPq4b+vWj/APGBP+xjVMvimyvPu2Utn6o6lT+TP+czLdOK/bkoHZrA/wDX0xJ/vZP4zo9ivT2bxBbqMe7VXsz/ADrGUjn5KjfmJ8OvFvttDqcgX+WP9nSa2/vBoF3t92eR6P5EfQT1w33Z5HpP8CPpAu32Hk/oHUZ7efx9fKrz/wAJU/iMD/pHqsdvtF+P7V5dXgXTr0/2f+deNpKvqbAeDgjKj+lsVBj48ShbLmstZ2+87M7fVyWP7zAktHolt6W5AxYm+zPOCiKjFT6Z5Yj1JGOfSMmzUof0a19C43o1diKOCWqdVdR+qQ+5cD9rgDkmE6jo/Katc5LVq5PplmccH1HugZ+RlZUsSIiWQREQEREBERAREQPqOQ4ZSQQQQRwQQcgg+hB5mz6nqLanQCtF8ux7Ert2ggMHVyG291XIyV+fcg4mrzbPDuuoays2WIjoAvv8BlQqyEP2PvImUJBODjvg1y/VMa/1alU15RBhVCAZ5JOxWJJ7Elie3Es32F2DOrXIz/AnGecfwgzj8vzmga7RsdPdY67XFxTt2FaD3B8tr5zzwi8nuYrTamyu8PVY9bjsyMUYZ7jcpzj5SZekLp9tl4HhatMjL3oMZ9FSxicevIA/ESkZka3X3XWBr7rLWXgF3Z9oPcDceOw7TGLD1ki0fZV40qpq+w6lgilianY4UFjlkYn7uWywJ4yxHHGd38c+Dk6jpq8WCuysna+3eCrY3KVyMg4Ug54x8zPPEztP1nVV0eXXqtQidgqWuqj5BQ2B+EC5q69B0DozEvvvcZwSA9pHZVUfcQE9+wzySe9JdQ1r36+y+0gvYxZsdsn0A9ABgD5ATpdi1pd2ZmbksxLE/Unkz5Auv2X+NK7enpor3C31jYhY4FiLwoBP64GAV7kDIzzjP8a+z1Nf1NL1u8pwoR/c371BJU/eGGGSM8+nwlCMoIwZIfpzWCnYNZqQn7PnWY+GMbu3ygW51vrOk6J0D7JpSG1DA4GQzbmABtsx29MDjOAAMZxWHge0J4w0r2NgeaNzMfVgy5JPxZhz85Ahec+p5J+PzzORHGIHrKw+6cd5VXhz2WV6dhf1C9HWvDbB7qArzlnfBZQecYUH1yOJWmm8R6ytNles1CqOyixsAfAAngfSYuu6hfd/L32247eZY7gfQMcCBvftO8cpqx9j0jZpVgbLPSxlOVVfigIzn1IGOBk19XjeM9sjvOIEz+n6MPpbmb9Wtyv1QB2I+g2qflYflIomNPYNJq3PvGh6xYK845Zwirk5w2N/PfbgnOJBdT1b261rLBtPYIAQEC8BADyMf4kmbRqtRUugqe9l81UUtWBlyQGZPd5CH+EdizYxuwASABqFthe5nb7zsWP1Ylj+8yuPfa1cIiJdUiIgIiICIiAiIgJ2UFPOHmAlM+8FIBx64J4z9Z1xA3nSaLzOivVW6uGQiuzIIGBjYzAgo20soYqMK21s4XbD+IelWLpvtDIVICCxSMFW4UgjsOduP2lO4cctr9aobRvBK+uAM4+WeM/Wbb03qekq0DVve1tRBHkujPj1ARtq+Xzzw4APIORmZ2Wdxb3Rel6SAHFqFwFR0dHIGCcEg4I53qfeXspx8ZmaGoVUOa3s95kyrAei2cFgcOMn1USQ6N1LTWp5K0XKG3Vpl0cJvHZXYo3b3tpL/d4GJH1n+LN/ST/B5z82eUl+Ht+UcHFyWXKbss/tXFq0YHdXWfogT99e3P4zm/RF+xi5tO61sSA6OwUnJGMuH9QR6TiJYfUP/CmsjsPLJ/tcH95mPFnllL3ens+ZeG8Nx3D+HPxWS/GlYjptO7AFv9oh/cKpyHTKMfetH9m378CWX4Y06p4h02mwN1NFjv8AEPcVYqT8VBA/Gd9CKfD3VjtH8tqPQeijH5TeXk1+b9nk5zwkz1OLrr5vzdf47Vf+iacEhrjjvwgx9TzicV6VUXCgWkkgACxckngDHlHPMsbwFWH8O62vHof71ZA/eJA+B9MX60rqhbykd+2RuCEKCewJJ4z8JT18l137uj7p4Sfa7w/J9ffcQuu8PDTsBdp7FLDjfZkH6eWqc/LM6VqrUe7VWPqpf/3S4lkdM6fdqPCt2k1WDchL1lnV2BIyM7WJA3bl59DiVvKc2WeOru6rr8s8P4Xl9WNwnqxv9LPiuzUqLNFssdlVXQgIq4+7YMBcqqcHvg/QyP1XTk+yqKq3Ls55Z93CqMgnCooJdcEjPukZmf8A+XP9Jf8AB5LW6+qjpiBqrWfZv3psGN5LkguzYA37S2zjgZziacHJlZI83zjg4uO24zVtk+kaz0zorWa50O1hUV8zk7QTnILY4A2sCe2QBnnI2fTaSxNNczqFaywuoZQPLXCkO4YjaDtUmvv7oz7u5WwNL1jSDp5Wl20jMSXOHd2PxF+GI9ewQjJwOZq2trq8/wDgtzD1ZwMk/EcA4+ZAPynRq5fR4Hs7OoisakitmfvudmDb2JySCAMj585OT2xMWImqpERAREQEREBERAREQEREBERA2HoutubT2AY2Im3C1oPv5GSVXgbVc545xnvMjSgOhUMgJKkbm2g4Dcbj7o7juQJq6MQ4ZSQw7EEgj6EciZy9XuBG5w+P21Rz/WYFv3zHk4vW9LwXj54fHWu972nW0lgsK7CWHcLhyOAcEJnacEHB+MnuleKLNJ0w6Z6VdM7lFm5dp3buxHvDd72OOc8zSL+s2PpTWUq2kFchWJUEgkKWYhMkDOAMzCq1liJhLLEHwV3X9ymZY+F9N3jdO3m87nNPTy8cs9/fTfPDviIUdcbVW5sLq4baRnLsrZ5OMe7jEzumeKaV6bqqbksI1L2NlCmVFgwRlj3H0MrxOq6gdr7fxsY/4mP0xqP86/5y04c5/N+zPk8x8NyW28V317X9PZYPh7xJp9HffsS1q7VQAOy7gV35zt4wd3p8JFL1WusuNPWa1ep6mDWF87sDd2ABA7DtzNU/TGo/zr/nOLdW1BGPOs/B2H+BkfYZa1v9kzzLw8yuV47bdb3ffXtts/Rup3UXsdMcMy7ThQ3HfO3nnI7zpbT2G3lGBY/rjZkk47vgZJPb5zWn11rLhrbGB9Gd2H5EzI0XWLKtP5apWR73vMp3YbG5dysDtOPuniV+69auTaefTHK5YcclvvflN6qrZVtZl3EglQwYrgN94rwDyOM5+IE6tb1C+vpiMjYUMU95AwO7LqQzA+u/IB/Z4kQ/WLs+6VT+hWikfR8bh+cw7bGezc7M7dtzEsf6zczXj4fRXF4zzH7fGyzu97/4+O2XJOOfgqqPwVQAPoBOMRN3lEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q=="
      />
    </a>
  </div>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      {title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
const buhariHotel = {
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j7lez89qhb4gji18j8b5",
  name: "Bhuhari Hotel",
  cousines: ["South Indian", " North Indian", "Chiness"],
  rating: "4.5",
};

const restuarantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "16141",
      name: "Moonlight Takeaway & Delivery",
      uuid: "b3aec8e9-cdf4-4c66-bc14-b0d2639b7cfa",
      city: "8",
      area: "T. Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "o5vlkrbbjez8gbei4utj",
      cuisines: ["Indian", "Chinese", "Tandoor"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "moonlight-takeaway-delivery-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address: "1/7, Gopalakrishna Street, Pondy Bazaar, T. Nagar, Chennai",
      locality: "Gopalakrishna Street",
      parentId: 11817,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "16141",
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "355835",
      name: "SS Hyderabad Biryani",
      uuid: "b6642c24-802a-460f-8826-c9eec54651df",
      city: "8",
      area: "West Mambalam",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "uw0obnnnva9ac1h3yvrf",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "ss-hyderabad-biryani-mylapore-mylapore-2",
        city: "chennai",
      },
      cityState: "8",
      address:
        "17/35, BRINDAVANAM STREET, WEST MAMBALAM , CHENNAI, Chennai Corp. Ward - 135, Chennai, Tamil Nadu-600033",
      locality: "Mylapore",
      parentId: 4824,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "355835",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "50972",
      name: "Buhari Hotel - Nandambakkam",
      uuid: "182da702-1561-4475-8726-7cac2ba37caa",
      city: "8",
      area: "Nandambakkam",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "spejdpuogvojhiymye4b",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "buhari-ramapuram-ramapuram",
        city: "chennai",
      },
      cityState: "8",
      address: "5/12, Mount Poonamalle Road, Nandambakkam, Ramapuram, Chennai",
      locality: "Mount Poonamalle Road",
      parentId: 50838,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5993235~p=4~eid=00000186-7f08-c56b-2a4e-6fcf008b0441",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "50972",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "239924",
      name: "Anburaj Resturant Briyani & Fast Food",
      uuid: "f5222279-a135-4cba-b623-4e8218b343e2",
      city: "8",
      area: "TEYNAMPET",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "hdatwmjnajz1htglkw7o",
      cuisines: ["Biryani", "North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "anburaj-resturant-briyani-&-fast-food-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address: "NO 2/219 THIYAGARAYA SALAI TEYNAMPET",
      locality: "T Nagar",
      parentId: 33059,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "239924",
        deliveryTime: 33,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "10345",
      name: "Copper Kitchen",
      uuid: "ba700534-35c8-4d59-9b3f-703bd5696f1c",
      city: "8",
      area: "Saligramam",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "dkkl4dc8nk7pnbektwor",
      cuisines: ["Biryani", "Chettinad", "Barbecue", "Chinese"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "copper-kitchen-vadapalani",
        city: "chennai",
      },
      cityState: "8",
      address: "No.5, Arunachalam road, Saligramam, Chennai",
      locality: "Arunachalam Road",
      parentId: 1877,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "10345",
        deliveryTime: 33,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "632217",
      name: "Aachi Namma Kitchen",
      uuid: "09acc57e-50c6-4cc2-9310-bb07af180b16",
      city: "8",
      area: "Ashok Nagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "5d1732121e921c168ee46fe28d971da2",
      cuisines: ["South Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "aachi-namma-kitchen-vadapalani-vadapalani",
        city: "chennai",
      },
      cityState: "8",
      address:
        "31/69, 7th Ave, Indira Colony, Ashok Nagar, Chennai, Tamil Nadu 600083, India",
      locality: "Indira Colony",
      parentId: 296176,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5994843~p=7~eid=00000186-7f08-c56b-2a4e-6fd0008b0717",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "632217",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "144698",
      name: "Halal Kattu Biryani",
      uuid: "31d61f5b-ebc8-4094-9adc-a553901ae5a7",
      city: "8",
      area: "Arumbakkam",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "p6w2bhhag5nym91k1wn8",
      cuisines: ["Biryani", "Indian", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 5.699999809265137,
      slugs: {
        restaurant: "halal-kattu-biryani-arumbakkam-arumbakkam",
        city: "chennai",
      },
      cityState: "8",
      address: "516, NSK Nagar, 3rd Avenue, Arumbakkam, Chennai",
      locality: "Nsk Nagar",
      parentId: 17364,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "144698",
        deliveryTime: 42,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 5.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "479846",
      name: " Kovai Alankar Vilas",
      uuid: "acd96e94-1307-4f33-b969-3ceef2a62b5f",
      city: "8",
      area: "T Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ehlke2ugucji1zrxnwig",
      cuisines: ["South Indian", "Indian", "Biryani", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "kovai-foods---kovai-alankar-vilas-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address:
        "NEW DOOR NO:90,1ST MAIN ROAD,CIT NAGAR,CHENNAI-600035, Chennai Corp. Ward - 141, Chennai, Tamil Nadu-600035",
      locality: "T Nagar",
      parentId: 5909,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5984822~p=10~eid=00000186-7f08-c56b-2a4e-6fd1008b0a72",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "479846",
        deliveryTime: 29,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

/** Destructure and pass
 * 1. pass individual items
 * 2. use spread operator ...restaurant[0].data
 */
const RestuarantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatings,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{totalRatings} stars</h4>
    </div>
  );
};
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurantItem.data?.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurantItem.data?.name}</h2>
//       <h3>{props.restaurantItem.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurantItem.data?.totalRatings} stars</h4>
//     </div>
//   );
/**props: //Properties. to pass data into functional component, or class component. pass props into FC
 *
 * pass data inside function usig Parameters. <RestuarantCard restaurantItem={restuarantList[0].data} /> here,restaurantItemis the props
 * which got arguments . pass in arguments. Receive as parameters
 */

/** key should be unique, no index as key. no key <<< index key << unique key*/
const BodyComponent = () => {
  return (
    <div className="cardList">
      {restuarantList.map((restuarantItem) => {
        return (
          <RestuarantCard
            {...restuarantItem.data}
            key={restuarantItem.data.id}
          />
        );
      })}
    </div>
  );
};
{
  /* <RestuarantCard restaurantItem={restuarantList[0]} />
      <RestuarantCard restaurantItem={restuarantList[1]} />
      <RestuarantCard restaurantItem={restuarantList[2]} />
      <RestuarantCard restaurantItem={restuarantList[3]} />
      <RestuarantCard restaurantItem={restuarantList[4]} />
      <RestuarantCard restaurantItem={restuarantList[5]} /> */
}
const FooterComponent = () => {
  return <h1>Footer</h1>;
};
/** React.Fragment --> is a component exported by react. use like <REact.Fragment><React.Fragment/>
 *
 * React jsx can have one parent.add one div  around and gives extra div tag. so use react.frafment to give empty tag
 *
 */
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
