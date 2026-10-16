import { test, expect } from '@playwright/test';
test('navigation, filters, accessible interactions and content',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.locator('main > section')).toHaveCount(5);
 await expect(page.locator('h1')).toContainText('DESIGNING');
 await page.getByRole('button',{name:'MENU'}).click();
 await expect(page.getByRole('dialog',{name:''}).first()).toBeVisible();
 await page.getByRole('navigation').getByRole('link',{name:/Work/}).click();
 await expect(page.locator('#navigation')).not.toBeVisible();
 await page.locator('.filters').getByRole('button',{name:'App'}).click();
 await expect(page.locator('.project')).toHaveCount(4);
 await expect(page.locator('.project h3').first()).toHaveText('Zcafe Mobile app & design');
 await page.locator('.filters').getByRole('button',{name:'All'}).click();
 await expect(page.locator('.project')).toHaveCount(24);
 await page.locator('.concept').first().click();
 await expect(page.locator('.concept-dialog')).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(page.locator('.concept-dialog')).not.toBeVisible();
 const skill=page.locator('.skill-row button').first();await skill.scrollIntoViewIfNeeded();if(test.info().project.name==='mobile')await skill.tap();else await skill.focus();
 await expect(skill).toHaveAttribute('aria-expanded','true');
 await expect(page.locator('#skill-0')).toContainText('Figma');
 await expect(page.locator('.email-link')).toHaveAttribute('href','mailto:singyeecindy@gmail.com');
 for(const id of ['hero','about','skills','work','contact']){await page.locator('#'+id).scrollIntoViewIfNeeded();await page.waitForTimeout(100);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}
 expect(errors).toEqual([]);
 await page.goto('/');await page.screenshot({path:`test-results/hero-${test.info().project.name}.png`});
});
