import { mount } from '@vue/test-utils'
import TheLogo from '@/components/TheLogo.vue'

describe('TheLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
