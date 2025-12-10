import { shallowMount, createLocalVue } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('AboutView.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders about page content', () => {
    const wrapper = shallowMount(AboutView, {
      localVue,
      vuetify
    })
    expect(wrapper.text()).toContain('About Karafa')
    expect(wrapper.text()).toContain('Markdown note-taking application')
  })
})
