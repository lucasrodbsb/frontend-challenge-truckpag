import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Container,
  PageButton,
  PageInfo,
  PaginationButton,
  PaginationControls,
} from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    startPage = Math.max(1, endPage - maxVisibleButtons + 1);

    if (startPage > 1) {
      buttons.push(
        <PageButton
          key={1}
          onClick={() => onPageChange(1)}
          active={currentPage === 1}
        >
          1
        </PageButton>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis-start" className="ellipsis">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          active={currentPage === i}
        >
          {i}
        </PageButton>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis-end" className="ellipsis">
            ...
          </span>
        );
      }
      buttons.push(
        <PageButton
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          active={currentPage === totalPages}
        >
          {totalPages}
        </PageButton>
      );
    }

    return buttons;
  };

  return (
    <Container>
      <PaginationControls>
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
          Anterior
        </PaginationButton>

        <div className="page-buttons">{renderPageButtons()}</div>

        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
          <FiChevronRight />
        </PaginationButton>
      </PaginationControls>

      <PageInfo>
        Página {currentPage} de {totalPages}
      </PageInfo>
    </Container>
  );
};

export default Pagination;
