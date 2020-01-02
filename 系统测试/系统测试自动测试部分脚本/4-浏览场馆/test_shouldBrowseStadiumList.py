# Generated by Selenium IDE
import unittest
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestShouldBrowseStadiumList(unittest.TestCase):
  def setUp(self):
    self.driver = webdriver.Chrome()
    self.driver.implicitly_wait(10)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_shouldBrowseStadiumList(self):
    self.driver.get("http://localhost:8002/#/")
    self.driver.set_window_size(1552, 849)
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(2) .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(2) .el-input__inner").send_keys("xmfnnj@outlook.com")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input--suffix > .el-input__inner").send_keys("yuechen")
    element = self.driver.find_element(By.CSS_SELECTOR, ".el-form-item__content > .el-button--primary")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item__content > .el-button--primary").click()
    element = self.driver.find_element(By.CSS_SELECTOR, ".startBtn")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    element = self.driver.find_element(By.CSS_SELECTOR, "body")
    actions = ActionChains(self.driver)
    
    assert self.driver.title == "Meet Here"
    self.driver.find_element(By.CSS_SELECTOR, ".el-submenu:nth-child(3) > .el-submenu__title").click()
    self.driver.find_element(By.CSS_SELECTOR, ".is-opened .el-menu-item").click()
    elements = self.driver.find_elements(By.XPATH, "//div[@id=\'app\']/div/div/div[2]/div/div[2]/div/div/div/div/div/div/div")
    assert len(elements) > 0
    self.driver.close()
  
