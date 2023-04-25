import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div>
          <a className="text-decoration-none" href="https://ebpf.io/">eBPF </a>
          {' '}
          © 2023
        </div>
        <div className="ms-md-auto">
          <a
            className="text-decoration-none"
            href="@layout/AdminLayout/AdminLayout"
          >
          </a>
        </div>
      </Container>
    </footer>
  )
}
