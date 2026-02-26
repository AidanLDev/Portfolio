import { expect, test } from '@playwright/test'

test('home page shows profile card text', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', {
      level: 2,
      name: 'Full-Stack Software Engineer',
    }),
  ).toBeVisible()
})
