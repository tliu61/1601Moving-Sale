


Vue.component('product', {
  props: ['item'],
  template:`
    <div class="product"
         v-on:update-product-image="updateProductImage">
      <h2 :class="{productSold: item.sold === '1'}" id="name">{{item.productId}}. {{item.productName}}</h2>
      <div class="product-image">
        <img id="displayImage" v-bind:src="item.image">
      </div><br>

      <div class="productImages" v-for="variant in item.variants" :key="variant.variantId">
        <img id="previewImages"
             v-bind:src="variant.variantImage"
             v-on:click="updateProductImage(variant.variantImage)">
      </div>

      <div class = "product-info">
        <h3>price: {{"$ " + item.price}}</h3>

        <p v-if='item.sold==1'>Sold :(</p>
        <p v-else>Still Available!</p>

        <ul>
          <li v-for="detail in item.details">{{detail}}</li>
        </ul>


      </div>
    </div>
  `,
  data: function(){
    return{
      // data goes here
      productId: 1,
      productName: 'Pitcher',
      price: '$1.00',
      image: 'images/1601GarageSale_pitcher1.jpg',
      sold: false,
      details: ["1 GAL | 3.8L", "BPA FREE", "Ice Guard Design", "Made in U.S.A"],
      variants: [
        {
          variantId: "pitcher1",
          variantImage: "images/1601GarageSale_pitcher1.jpg"
        },
        {
          variantId: "pitcher2",
          variantImage: "images/1601GarageSale_pitcher2.jpg"
        },
        {
          variantId: "pitcher3",
          variantImage: "images/1601GarageSale_pitcher3.jpg"
        },
        {
          variantId: "pitcher4",
          variantImage: "images/1601GarageSale_pitcher4.jpg"
        }
      ]
    }
  },
  methods:{
    // methods go here
    updateProductImage: function(variantImage){
      this.item.image = variantImage;
    }
    // updateProductImage: function(variantImage){
    //   this.$emit('update-product-image(variantImage)')
    // }
  }
});
var app = new Vue({
  el: '#app',
  data: {
    items: [
      // {
      //   productId: 1,
      //   productName: 'Pitcher',
      //   price: '$1.00',
      //   image: 'images/1601GarageSale_pitcher1.jpg',
      //   sold: false,
      //   details: ["1 GAL | 3.8L", "BPA FREE", "Ice Guard Design", "Made in U.S.A"],
      //   variants: [
      //     {
      //       variantId: "pitcher1",
      //       variantImage: "images/1601GarageSale_pitcher1.jpg"
      //     },
      //     {
      //       variantId: "pitcher2",
      //       variantImage: "images/1601GarageSale_pitcher2.jpg"
      //     },
      //     {
      //       variantId: "pitcher3",
      //       variantImage: "images/1601GarageSale_pitcher3.jpg"
      //     },
      //     {
      //       variantId: "pitcher4",
      //       variantImage: "images/1601GarageSale_pitcher4.jpg"
      //     }
      //   ]
      // },
      // {
      //   productId: 2,
      //   productName: 'TI84 Silver Plus Calculator',
      //   price: '$89.00',
      //   image: 'images/1601GarageSale_ti84calculator1.jpg',
      //   sold: false,
      //   details: ["High resolution, full-color backlit display", "TI Rechargeable Battery", "Familiar TI-84 Plus functionality", "Import and use images"],
      //   variants: [
      //     {
      //       variantId: "calculator1",
      //       variantImage: "images/1601GarageSale_ti84calculator1.jpg"
      //     },
      //     {
      //       variantId: "calculator2",
      //       variantImage: "images/1601GarageSale_ti84calculator2.jpg"
      //     },
      //     {
      //       variantId: "calculator3",
      //       variantImage: "images/1601GarageSale_ti84calculator3.jpg"
      //     }
      //   ]
      // },
      // {
      //   productId: 3,
      //   productName: 'Multipurpose Bench',
      //   price: '$2.00',
      //   image: 'images/1601GarageSale_smallbench4.jpg',
      //   sold: false,
      //   details: ["for sit", "for stand", "light and durable", "great"],
      //   variants: [
      //     {
      //       variantId: "bench1",
      //       variantImage: "images/1601GarageSale_smallbench4.jpg"
      //     },
      //     {
      //       variantId: "bench2",
      //       variantImage: "images/1601GarageSale_smallbench2.jpg"
      //     },
      //     {
      //       variantId: "bench3",
      //       variantImage: "images/1601GarageSale_smallbench3.jpg"
      //     },
      //     {
      //       variantId: "bench4",
      //       variantImage: "images/1601GarageSale_smallbench1.jpg"
      //     }
      //   ]
      // },
      // {
      //   productId: 4,
      //   productName: 'Office Chair',
      //   price: '$10.00',
      //   image: 'images/1601GarageSale_officechair1.jpg',
      //   sold: false,
      //   details: [],
      //   variants: [
      //     {
      //       variantId: "officechair1",
      //       variantImage: "images/1601GarageSale_officechair1.jpg"
      //     },
      //     {
      //       variantId: "officechair2",
      //       variantImage: "images/1601GarageSale_officechair2.jpg"
      //     },
      //     {
      //       variantId: "officechair3",
      //       variantImage: "images/1601GarageSale_officechair3.jpg"
      //     }
      //   ]
      // },
      // {
      //   productId: 5,
      //   productName: 'Frying Pan',
      //   price: '$3.00',
      //   image: 'images/1601GarageSale_fryingpan1.jpg',
      //   sold: false,
      //   details: [],
      //   variants: [
      //     {
      //       variantId: "fryingpan1",
      //       variantImage: "images/1601GarageSale_fryingpan1.jpg"
      //     },
      //     {
      //       variantId: "fryingpan2",
      //       variantImage: "images/1601GarageSale_fryingpan2.jpg"
      //     },
      //     {
      //       variantId: "fryingpan3",
      //       variantImage: "images/1601GarageSale_fryingpan3.jpg"
      //     },
      //     {
      //       variantId: "fryingpanh4",
      //       variantImage: "images/1601GarageSale_fryingpan4.jpg"
      //     }
      //   ]
      // }
    ]
  },
  mounted: function() {
    console.log('executing mounted function');
    this.getItems();
  },
  methods: {
    getItems: function(){
      axios.get('config.php')
      .then(function (response) {
        console.log(response.data);
        app.items = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateImage(img){
      this.image = img
    }
  }
});
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// you can invoke methods in JavaScript too
// example2.greet() // => 'Hello Vue.js!'
