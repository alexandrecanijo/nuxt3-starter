import { mountSuspended } from '@nuxt/test-utils/runtime';
import testTarget from './index.vue';

it('can mount the component', async () => {
  const wrapper = await mountSuspended(testTarget);
  expect(wrapper.html()).toMatchSnapshot();
});
