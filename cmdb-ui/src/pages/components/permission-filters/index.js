import './filters.scss'
import AttrExpress from './attr-express.js'

export default {
  name: 'FiltersRule',
  component: {
    AttrExpress
  },
  props: {
    value: { default: [], type: Array, required: true },
    allCiTypes: { default: () => [], type: Array, required: true },
    isFilterAttr: { default: false, type: Boolean, required: false },
    displayAttrType: { type: Array, required: false },
    hiddenAttrType: { type: Array, required: false },
    rootCis: { default: () => [], type: Array, required: true },
    rootCiTypeId: { required: false },
    disabled: { default: () => false }
  },
  data () {
    return {
      modalDisplay: false,
      optionsDisplay: false
    }
  },
  mounted () {},
  methods: {
    addExpression (v) {
      let _value = JSON.parse(JSON.stringify(this.value))
      _value.push(v)
      this.$emit('input', _value)
      this.optionsDisplay = false
    },
    handleInput (v, i) {
      let _value = JSON.parse(JSON.stringify(this.value))
      if (v === '') {
        _value.splice(i, 1)
      } else {
        _value.splice(i, 1, v)
      }
      this.$emit('input', _value)
    },
    renderAddIcon () {
      return (
        <Poptip content={this.$t('add_expression')} trigger="hover">
          <Button
            class="filters-rule-add"
            size="small"
            onClick={() => this.addExpression(this.rootCis[0])}
            icon="md-add"
          ></Button>
        </Poptip>
      )
      // if (this.isReadOnly || (this.value.length && this.value[0])) {
      //   return null
      // } else {
      // if (this.rootCis.length > 1) {
      //   return (
      //     <Poptip v-model={this.optionsDisplay}>
      //       <div slot="content" class="filters-rule-options">
      //         {this.rootCis.map(_ => (
      //           <div onClick={() => this.addExpression(_)}>{_}</div>
      //         ))}
      //       </div>
      //       <Button class="filters-rule-add" size="small">
      //         {this.$t('add_expression')}
      //       </Button>
      //     </Poptip>
      //   )
      // } else {
      //   return (
      //     <Button class="filters-rule-add" size="small" onClick={() => this.addExpression(this.rootCis[0])}>
      //       {this.$t('add_expression')}
      //     </Button>
      //   )
      // }
      // }
    }
  },
  render (h) {
    if (this.isReadOnly && !this.value.length) {
      return null
    } else {
      return (
        <div class="filters-rule" filterIndex ref="zsf">
          {this.value
            .filter(item => item !== null)
            .map((_, i) => [
              i > 0 ? <span> | </span> : null,
              <AttrExpress
                ref={`attrExpress-${0}`}
                value={_}
                displayAttrType={this.displayAttrType}
                hiddenAttrType={this.hiddenAttrType}
                onInput={v => this.handleInput(v, i)}
                allCiTypes={this.allCiTypes}
                isFilterAttr={this.isFilterAttr}
                rootCiTypeId={this.rootCiTypeId}
                disabled={this.disabled}
              />
            ])}
          {this.renderAddIcon()}
        </div>
      )
    }
  }
}
