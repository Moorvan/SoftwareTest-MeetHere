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

class TestCustomerRegisterMailSuccess(unittest.TestCase):
  def setUp(self):
    self.driver = webdriver.Chrome()
    self.driver.implicitly_wait(10)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_customerRegisterMailSuccess(self):
    self.driver.get("http://localhost:8002/")
    self.driver.set_window_size(1440, 830)
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--success").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(1) .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(1) .el-input__inner").send_keys("852092786@qq.com")
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(2) > .el-form-item__content:nth-child(2) .el-input__inner").send_keys("hello")
    self.driver.find_element(By.CSS_SELECTOR, ".el-form-item:nth-child(3) > .el-form-item__content:nth-child(2) .el-input__inner").send_keys("123456")
    self.driver.find_element(By.CSS_SELECTOR, ".el-col span").click()
    time.sleep(2)
    assert self.driver.switch_to.alert.text == "发送成功!"
    self.driver.switch_to.alert.accept()
    self.driver.find_element(By.CSS_SELECTOR, ".el-dialog__close").click()
    self.driver.close()
  
