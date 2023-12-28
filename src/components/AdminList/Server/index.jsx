import React, { useState } from 'react'
import { BoxHeader, ContentWrapper } from '../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import { BandCard, BandCardIcon, BandCardText, BandDiagramm, WrapperBox } from './styles'
import { getFrontUpdate } from './request'
import { additional_front_update } from '../../../utils/API_urls'

export default function Server() {
  const [Status, setStatus] = useState(true)

  const handleClick = () => {
    setStatus(false)
    getFrontUpdate(additional_front_update, (response) => {
      console.log(response);
      setStatus(true)
    }, (error) => {
      setStatus(true)
      console.log(error);
    })
  }

  return (
    <ContentWrapper>
      <div>
        <Typography
          sx={{
            color: "#000",
            fontWeight: "600",
            fontSize: "20px",
            padding: "0 0 20px 0"
          }}
        >
          Disk
        </Typography>

        <div style={{ width: "70vw", display: "flex", justifyContent: "space-between" }}>

          <WrapperBox>
            <div>
              <div style={{ display: "flex" }}>
                <BoxHeader>
                  <BandCard>
                    <BandCardIcon>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10.5" r="10" fill="#039E51" />
                      </svg>
                      <BandCardText>Band:</BandCardText>
                    </BandCardIcon>
                    <BandCardText>772,966,219,776 байт</BandCardText>
                    <BandCardText>719.88 GB</BandCardText>
                  </BandCard>
                  <BandCard>
                    <BandCardIcon>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10.5" r="10" fill="#D9D9D9" />
                      </svg>
                      <BandCardText>Bo’sh:</BandCardText>
                    </BandCardIcon>
                    <BandCardText>741,112,475,648 байт</BandCardText>
                    <BandCardText>690.21 GB</BandCardText>
                  </BandCard>
                  <BandCard>
                    <BandCardIcon>
                      <BandCardText>Sig’im:</BandCardText>
                    </BandCardIcon>
                    <BandCardText>71,514,078,695,424 байт</BandCardText>
                    <BandCardText>1.38 GB</BandCardText>
                  </BandCard>
                </BoxHeader>
                <BandDiagramm>
                  <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M127 63.5C127 98.5701 98.5701 127 63.5 127C28.4299 127 0 98.5701 0 63.5C0 28.4299 28.4299 0 63.5 0C98.5701 0 127 28.4299 127 63.5ZM18.3802 63.5C18.3802 88.419 38.581 108.62 63.5 108.62C88.419 108.62 108.62 88.419 108.62 63.5C108.62 38.581 88.419 18.3802 63.5 18.3802C38.581 18.3802 18.3802 38.581 18.3802 63.5Z" fill="#D9D9D9" />
                    <path d="M66.7724 9.29903C67.0787 4.22706 63.1981 -0.202302 58.1351 0.227005C49.5092 0.958415 41.0902 3.44905 33.4101 7.5818C23.0179 13.1739 14.3896 21.5513 8.4935 31.7741C2.59737 41.9968 -0.333377 53.6603 0.0301315 65.456C0.39364 77.2516 4.03701 88.7125 10.5514 98.5528C17.0659 108.393 26.1936 116.223 36.9104 121.165C47.6272 126.106 59.509 127.964 71.2226 126.529C82.9362 125.093 94.0182 120.422 103.225 113.04C110.029 107.584 115.61 100.806 119.652 93.1509C122.025 88.6577 119.463 83.3554 114.674 81.6564C109.885 79.9574 104.701 82.533 102.067 86.8782C99.3449 91.3687 95.8471 95.3699 91.7137 98.6844C85.1748 103.928 77.3041 107.245 68.9848 108.265C60.6655 109.284 52.2267 107.965 44.6154 104.455C37.004 100.945 30.5213 95.3842 25.8946 88.3954C21.2679 81.4066 18.6802 73.2667 18.4221 64.8892C18.1639 56.5116 20.2454 48.2279 24.433 40.9674C28.6206 33.707 34.7486 27.7571 42.1293 23.7855C46.7949 21.2749 51.8444 19.6175 57.0414 18.8655C62.0703 18.1378 66.4662 14.371 66.7724 9.29903Z" fill="#039E51" />
                  </svg>
                </BandDiagramm>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  sx={{ width: "48%", textTransform: "none" }}
                  variant="outlined"
                >
                  Keshni tozalash
                </Button>
                <Button
                  sx={{ width: "48%", textTransform: "none", boxShadow: "none" }}
                  variant="contained"
                >
                  Baxoni qayta o’rnatish
                </Button>
              </div>
            </div>
          </WrapperBox>

          <WrapperBox>
            {
              Status ?
                <Button
                  sx={{ width: "48%", textTransform: "none", boxShadow: "none", borderRadius: "20px" }}
                  variant="contained"
                  onClick={handleClick}
                >
                  <h1 style={{ fontFamily: "unset" }}>UPDATE FRONTEND</h1>
                </Button> :

                <Button
                  sx={{ width: "48%", textTransform: "none", boxShadow: "none", borderRadius: "20px" }}
                  variant="contained"
                  disabled
                >
                  <h1 style={{ fontFamily: "unset" }}>UPDATE FRONTEND</h1>
                </Button>
            }
          </WrapperBox>

        </div>

      </div>
    </ContentWrapper>
  )
}
