import React, { useState } from 'react'
import { Card, Content, FirstDetail, SecondDetail, ThirdDetail, ForthDetail, SelectButton } from './PlanCardCSS.js';

function PlanCard ()
{  
  return (
      <div>
          <Card>
              <Content>
                  <FirstDetail>
                      <p>You Pay </p>
                      <h3>AED 125 <span style={ {
                          fontSize: '1rem'
                      } }>/month</span></h3>
                      <p>For 12 months + 5% VAT</p>
                  </FirstDetail>  
                  <SecondDetail>
                    <p>You Get</p>
                    <h3>Power Plan 125</h3>
                  </SecondDetail>
                  <ThirdDetail>
                      <h2>4GB <span style={ {
                          fontSize: '1.1rem'
                    }}>National Data</span></h2>
                      <h2>100 <span style={ {
                          fontSize: '1.1rem'
                    }}>Flexi Minutes</span></h2>
                  </ThirdDetail>
                  <ForthDetail>
                      <p>
                        "No activation fee. Save AED 125",
                      </p>
                      <p>
                        "4GB free data on WiFi UAE"
                      </p>
                    
                  </ForthDetail>
                  <SelectButton>Select</SelectButton>
              </Content>
          </Card>
      </div>
  )
}

export default PlanCard