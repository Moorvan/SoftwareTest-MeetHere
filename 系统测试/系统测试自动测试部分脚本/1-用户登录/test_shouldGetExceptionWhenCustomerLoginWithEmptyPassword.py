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

class TestShouldGetExceptionWhenCustomerLoginWithEmptyPassword(unittest.TestCase):
  def setUp(self):
    self.driver = webdriver.Chrome()
    self.driver.implicitly_wait(10)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_shouldGetExceptionWhenCustomerLoginWithEmptyPassword(self):
    self.driver.get("http://localhost:8002/")
    self.driver.set_window_size(1440, 830)
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(2) .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(2) .el-input__inner").send_keys("10175101152@stu.ecnu.edu.cn")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input--suffix > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".form_contianer").click()

    
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item__content > .el-button--primary").click()


    self.driver.find_element(By.CSS_SELECTOR, ".el-notification__title").click()
  
