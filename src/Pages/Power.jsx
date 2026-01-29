import React from 'react'

const Power = () => {
  return (
    <div>
      <div>
        <h1>Power ranking</h1>
     <div className='w-50 h-30 bg-blue-600'>
      <h3>210</h3>
      <h6>7911th place</h6>
      <img src="data:image/webp;base64,UklGRh4DAABXRUJQVlA4WAoAAAAQAAAAHAAAOQAAQUxQSC0BAAABkFZbb9hIH4RCEIRCMBRDCIOawQyCNYQw2EAoBEMIA70fSSQNg4iYAIXbz/5dJ7fre/xYyEjP0J6zSCM9FT0e/MkiDcC5OrgzFd0jOA4WMQDn0WEqOi9RxyIGHmMoOskuC61UV7STXQp/M95Db7JL4ZlqISPpU+EOHnG32ErwT+EGTtTbu92bpJmJnpJOip0pdcqXSUddl4xi55DUwUs4TdJBrbNJMmqdJUkdvALscrhT6Axdnatn+Oq2f8b4fD5ji51299xjm7JH6FDWeHaWpXoAutJHZCptBJfl+pPTlP/vDwzljXtnqbD7jXNaxcFjV6Hx+KvKfuOsV8l+A6bS0282lTZup2on4KxX0QI4TbXGdVNxvwxV78BX5QuWlb2At8obbKrfGPrDMfSHAFZQOCDKAQAAkA0AnQEqHQA6AD5hKI9FpCKhm/wGAEAGBLYAWI9CPVvdvMntH9A+DnnF5J80TlX/HdIDbteYDdAP2A6wD0AP2O9Kz9sPgf/br0Zv/rmoFFqB4bFA8Gieaf6U7NsyzlX4wCyj9LXjWzc/STIuPGgw9NQzIKUgAP71xj+OGQnZP1O2LsK4QTB8IFWlixj/9N8o2FTX7nhX/ni/dXQD87fD0IKX6rbf4Si/ZldTUs4Bh/UWWC8kfQV0qdd4AeVLPk6awK5pGHBzva8tTd00h/Ba2SRbase8HQ0MIh1CqiKLYQJnhDI3omNylf8+fHr97NOFSy8oNf5yB/hvt8k8ThBDHNTFaVhcxdrXEPpnjin1LR34/rXKXUMddIxZWf+P/oUa+E/8jOkG1/FaQkTTj1rz0t0Jbi+f/k5FjrZ3NVDRXfgEmdja0FdKRL2Alv62NER0FwHZkpjrPrnzovR/sxp7O+iiOkUMpkptczf/wTem5mg6vMwgv/UGP++y7/tffPG4HhTw/f/d0YZQzbshgG4ZvdpJpYznn//3h0W8u4foZ40wu8bYND9uIRlQmId+ESv/BCslTEMM/jvCulXmNK0Hfya+AwRIU1xAAAA=" alt="" />
     </div>

     <div className='w-150 h-200'>
      <h6>{item.id}</h6>
      <h5>{item.name}</h5>
      <h5>{item.coin}⚡</h5>
     </div>


      </div>
    </div>
  )
}

export default Power