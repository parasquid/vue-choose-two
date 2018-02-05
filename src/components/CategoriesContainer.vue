<template>
  <div>
    <form>
      <fieldset>
        <template v-for="(item, index) in itemList">
          <div :class="`item ${item}`" :key="item">
            <input type="checkbox" :id="index" name="item" :value="item" v-model="selectedItems" :disabled="maxItemsSelected && notCurrentlySelected(item)" :key="item">
            <label :for="index"></label>
          </div>
        </template>
      </fieldset>
    </form>
    <span>Selected Items: {{ selectedItems }}</span>
    <button :disabled="!maxItemsSelected">Continue</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedItems: [],
      itemList: [
        'one',
        'two',
        'three',
        'four',
        'five'
      ],
      max: 2
    }
  },
  computed: {
    maxItemsSelected () {
      return this.selectedItems.length >= this.max
    }
  },
  methods: {
    notCurrentlySelected (item) {
      return this.selectedItems.indexOf(item) === -1
    }
  }
}
</script>

<style <style lang="scss" scoped>
.item {
  label {
    border: 1px black solid;
    background-color: white;
    height: 100px;
    width: 100px;
    display: block;
    cursor: pointer;
  }
  input[type=checkbox]:checked + label {
    background-color: black;
  }
  input[type=checkbox]:disabled + label {
    background-color: grey;
    cursor: default;
  }
  input[type=checkbox] {
	  visibility: hidden;
  }
}
</style>
