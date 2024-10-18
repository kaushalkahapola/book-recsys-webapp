import prisma from '@/prisma/prisma_client';
import { NextRequest,  NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {  
    // Get the book ID from the request body
    const { bookId, userId } = await req.json();

    // Validate the input
    if (!bookId) {
        return NextResponse.json({ message: 'Book ID is required' }, { status: 400 });
    }

    try {
        // Create a new WishListItem
        const wishListItem = await prisma.ratedListItem.create({
            data: {
                user: {
                    connect: { userId: parseInt(userId, 10) }, // Assuming session.user.id holds the user's ID
                },
                book: {
                    connect: { bookId: parseInt(bookId, 10) }, // Assuming bookId is the unique identifier for the book
                },
                rating: 5.0
            },
        });

        // Add to the ratings list too
        const rating = await prisma.ratings.create({
            data: {
                userId: parseInt(userId, 10),
                bookId: parseInt(bookId, 10),
                rating: 5.0
            },
        });


        return NextResponse.json(wishListItem, { status: 201 });
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}