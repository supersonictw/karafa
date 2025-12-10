import { shallowMount, createLocalVue } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('HomeView.vue', () => {
  let vuetify
  let mocks

  beforeEach(() => {
    vuetify = new Vuetify()
    mocks = {
        $db: {
            table: jest.fn().mockReturnValue({
                each: jest.fn().mockImplementation((callback) => {
                    // Simulate some data
                    const notes = [
                        { uuid: '1', title: 'Note 1', content: 'Content 1', updated_at: new Date().getTime() },
                        { uuid: '2', title: 'Second Note', content: 'Something else', updated_at: new Date().getTime() }
                    ]
                    notes.forEach(callback)
                    return Promise.resolve()
                })
            })
        }
    }
  })

  it('renders search bar', () => {
    const wrapper = shallowMount(HomeView, {
      localVue,
      vuetify,
      mocks
    })
    expect(wrapper.find('v-text-field-stub').exists()).toBe(true)
  })

  it('filters notes based on search query', async () => {
    const wrapper = shallowMount(HomeView, {
      localVue,
      vuetify,
      mocks
    })

    // Wait for mounted promise to resolve
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.notes.length).toBe(2)

    wrapper.setData({ search: 'Second' })
    expect(wrapper.vm.filteredNotes.length).toBe(1)
    expect(wrapper.vm.filteredNotes[0].title).toBe('Second Note')
  })
})
