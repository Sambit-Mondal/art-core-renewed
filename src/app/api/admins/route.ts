import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/admin';
import PendingInvite from '@/models/pendingInvite';

// Fetch active admins and pending invites
export async function GET() {
    try {
        await dbConnect();

        // Fetch active admins
        const activeAdmins = await Admin.find();

        // Fetch pending invites
        const pendingInvites = await PendingInvite.find();

        return NextResponse.json(
            { activeAdmins, pendingInvites },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching admins and invites:', error);
        return NextResponse.json(
            { error: 'Failed to fetch admins and invites.' },
            { status: 500 }
        );
    }
}