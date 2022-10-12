<script>
export default {
  data() {
    return {
      item_name: "",
      item_price: "",
      item_description: ""
    }
  }
}
</script>

<template>
    <div class="menu-item">
        <header class="item-header">
            <h4>{{item_name}}</h4>
            <p>{{price}}</p>
        </header>
        <p class="item-description">{{description}}</p>
    </div>
</template>