import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import FilmCard from '../../../src/custom/components/film-card/index';

describe('FilmCard Component', () => {
  it('should render the film image and name correctly', () => {
    render(
      <FilmCard
        imgUrl="https://example.com/image.jpg"
        onClick={() => {}}
        filmName="Test Film"
      />
    );

    const imageElement = screen.getByAltText('film');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      'https://example.com/image.jpg'
    );

    const filmNameElement = screen.getByText('Test Film');
    expect(filmNameElement).toBeInTheDocument();
  });

  it('should call onClick when the image is clicked', () => {
    const handleClick = vi.fn();
    render(
      <FilmCard
        imgUrl="https://example.com/image.jpg"
        onClick={handleClick}
        filmName="Test Film"
      />
    );

    const imageElement = screen.getByAltText('film');
    fireEvent.click(imageElement);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should render the correct favorite icon based on isFavourite prop', () => {
    const handleClickFavourite = vi.fn();

    const { rerender } = render(
      <FilmCard
        imgUrl="https://example.com/image.jpg"
        onClick={() => {}}
        filmName="Test Film"
        onClickFavourite={handleClickFavourite}
        isFavourite={true}
      />
    );

    const filledHeartIcon = screen.getByTestId('FavoriteIcon');
    expect(filledHeartIcon).toBeInTheDocument();

    rerender(
      <FilmCard
        imgUrl="https://example.com/image.jpg"
        onClick={() => {}}
        filmName="Test Film"
        onClickFavourite={handleClickFavourite}
        isFavourite={false}
      />
    );

    const borderHeartIcon = screen.getByTestId('FavoriteBorderIcon');
    expect(borderHeartIcon).toBeInTheDocument();
  });

  it('should call onClickFavourite when the favorite icon is clicked', () => {
    const handleClickFavourite = vi.fn();
    render(
      <FilmCard
        imgUrl="https://example.com/image.jpg"
        onClick={() => {}}
        filmName="Test Film"
        onClickFavourite={handleClickFavourite}
        isFavourite={true}
      />
    );

    const favoriteIcon = screen.getByTestId('FavoriteIcon');
    fireEvent.click(favoriteIcon);

    expect(handleClickFavourite).toHaveBeenCalled();
  });
});
